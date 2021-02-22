class Hero {
    constructor(x, y, width, height) {
      var options = {
        
          frictionAir : 1,
          density:1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images/Superhero-02.png");
      
      this.width = 200;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("yellow");
      
      imageMode(CENTER)
        //ellipse(0,0,this.r,this.r)
        image(this.image,0,0,this.width,this.height)
      pop();
    }
  }
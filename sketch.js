const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;






function preload() {
    backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ground= new Ground(600,height,1200,20)
ground2 = new Ground(750,200,300,20)
hero= new Hero(200,200,10,10)
mon1= new Monster(750,100,300,10)

box1 = new Box(400,350,50,50)
    box2 = new Box(450,350,50,50)
    box3 = new Box(500,350,50,50)
    box4 = new Box(550,350,50,50)
    box5 = new Box(600,350,50,50)
    box6 = new Box(650,350,50,50)
    box7 = new Box(450,300,50,50)
    box8 = new Box(500,300,50,50)
    box9 = new Box(550,350,50,50)
    box10 = new Box(600,350,50,50)
    box11 = new Box(500,350,50,50)
    box12 = new Box(550,350,50,50)
   


rope1= new Fly(hero.body,{x:200,y:100})
    

    
   
}

function draw(){
  
    background(backgroundImg)
    Engine.update(engine);
    //strokeWeight(4);
    ground.display()
    ground2.display()
    hero.display()
    mon1.display()
    rope1.display()

box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

}

function mouseDragged()
{
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}


function mouseReleased(){
    rope1.fly();
}




    function keyPressed() {
        if (keyCode === 32) {
        rope1.attach(hero.body);
        }
      }
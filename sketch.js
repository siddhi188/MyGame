const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var engine,world;


function setup() {
  createCanvas(1400,700);
  
   
  engine = Engine.create()
  world = engine.world

  stone1 = new Stone(700,350,60,60)
  stone2 = new Stone(700,340,50,50)
  stone3 = new Stone(700,330,40,40)
  stone4 = new Stone(700,320,30,30)
  stone5 = new Stone(700,310,20,20)
  stone6 = new Stone(700,300,10,10)

  ground1 = new Ground(700,400,60,10)
  ground2 = new Ground(30,350,30,30)
}

function draw() {
  background("Green"); 
  Engine.update(engine)
  fill("Black")
  stone1.display()
  fill("White")
  stone2.display()
  fill("pink")
  stone3.display()
  fill("blue")
  stone4.display()
  fill("yellow")
  stone5.display()
  fill("red")
  stone6.display()
  fill("white")
  ground1.display()
  fill("black")
  ground2.display()

  drawSprites();
}
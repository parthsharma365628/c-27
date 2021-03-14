
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload(){}
function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the objects Here.
	bob1=new bob(100,200,10)
	log1 = new log(300,200)
	
   rope1= new sling()

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightBlue");
  bob1.display()
  log1.display()
  //rope1.display()
 
}
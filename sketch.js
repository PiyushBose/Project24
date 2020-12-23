var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var paperB;
var groundB;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = new wall(600,610,10,50);
	wall2 = new wall(650,635,100,10);
	wall3 = new wall(700,610,10,50);

	paperB = new paper();

	groundB = new ground();


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  wall1.display();
  wall2.display();
  wall3.display();

  paperB.display();

  groundB.display();
  
  drawSprites();
 
}



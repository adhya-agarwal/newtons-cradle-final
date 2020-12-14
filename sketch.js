const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter=30
	bobStartPositionX=width/2;
	bobStartPositionY=height/4+500
	
	roof = new Roof (width/2,height/4,width/7,20);

	bob1 = new Bob (bobStartPositionX-bobDiameter*2,bobStartPositionY,bobDiameter);
	bob2 = new Bob (bobStartPositionX-bobDiameter,bobStartPositionY,bobDiameter)
	bob3 = new Bob (bobStartPositionX,bobStartPositionY,bobDiameter)
	bob4 = new Bob (bobStartPositionX+bobDiameter,bobStartPositionY,bobDiameter)
	bob5 = new Bob (bobStartPositionX+bobDiameter*2,bobStartPositionY,bobDiameter)

	rope1 = new Rope(bob1.bob,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.bob,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.bob,roof.body,0,0);
	rope4 = new Rope(bob4.bob,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.bob,roof.body,bobDiameter*2,0);

	var render = Render.create({ element: document.body,
		 engine: engine,
		  options: { width: 1200, height: 700, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.bob,bob1.bob.position,{x:-150,y:-150});
	}
}


function drawLine(constraint) { 
bobBodyPosition=constraint.bodyA.position 
roofBodyPosition=constraint.bodyB.position 
roofBodyOffset=constraint.pointB; 
roofBodyX=roofBodyPosition.x+roofBodyOffset.x
 roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
 line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }



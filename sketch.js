
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	balls = new Balls(100, 100, 50);

	ground = new Ground(600,581,1200,20);

    leftSide = new Dustbin(840,520,20,100);
	bottom = new Dustbin(900,560,100,20);
	rightSide = new Dustbin(960,520,20,100);
	Engine.run(engine);
	


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  balls.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  
 
}

function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }





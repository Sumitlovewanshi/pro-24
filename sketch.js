
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin, paperBall,Ground;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Dustbin=new dustbin(1200,650);
	paperBall=new paper(200,450,40);
	Ground=new ground(width/2,670,width,20);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Dustbin.display();
  paperBall.display();
  Ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
    
  	}
}






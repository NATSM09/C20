
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	block1 = Bodies.circle(220,10,10,block1_options)
	block2 = Bodies.rectangle(110,50,10,10,block2_options)
	block3 = Bodies.rectangle(350,50,10,10,block3_options)
	World.add(world, block1)
    World.add(world, block2)
	World.add(world,block3)
	

	Engine.run(engine);




var ball_options={

isStatic : false,
restitution : 0.3,
friction : 0,
density : 1,2

}

}



  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


ground.display();


GroundObj = new ground(width/ 2, 670, width, 20);

LeftSide = new ground( 1100, 600, 20, 120);


 
}








function keyPressed() {



if(keyCode === UP_ARROW){






}




}










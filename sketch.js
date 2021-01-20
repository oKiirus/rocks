
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690, 800, 20)

	hammer = new Hammer(200, 200)

	iron = new Iron(400, 200)

	stone = new Stone(300, 200, 10, 40)

	rubber = new Rubber(400, 300, 32)

	sand0 = new Sand(400, 500, 10)
	sand1 = new Sand(400, 500, 10)
	sand2 = new Sand(400, 500, 10)
	sand3 = new Sand(400, 500, 10)
	sand4 = new Sand(400, 500, 10)
	sand5 = new Sand(400, 500, 10)
	sand6 = new Sand(400, 500, 10)
	sand7 = new Sand(400, 500, 10)
	sand8 = new Sand(400, 500, 10)
	sand9 = new Sand(400, 500, 10)
	sand10 = new Sand(400, 500, 10)

	

	Engine.run(engine);
  
}


function draw() {
  background("cyan");
  
  ground.display()
  hammer.display()
  iron.display()
  stone.display()
  rubber.display()

  sand0.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()
  


 
}




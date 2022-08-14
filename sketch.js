//1)Name aliasing -nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//2)myEngine,myWorld
var myEngine,myWorld;

var ground,ball

var ground2,ball2

function setup()
{
  createCanvas(400,400);

  //3)Creating own engine,world
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var groundOptions={
    isStatic: true
  }

  //5)creating Bodies
  ground=Bodies.rectangle(200,370,400,20,groundOptions)
  World.add(myWorld,ground)

  console.log(ground)

  var ballOptions=[{
    restitution:2
  },{
    restitution:1.3
  }]

  

  
  ball=Bodies.circle(100,100,20,ballOptions[0]);
  World.add(myWorld,ball);
  console.log(ball)

  ground2 = Bodies.rectangle(300,200,100,20,groundOptions);
  World.add(myWorld,ground2);

  ball2 = Bodies.circle(300,10,30,ballOptions[1]);
  World.add(myWorld,ball2);



}

function draw() 
{
  background("pink");

  //4)updating engine
  Engine.update(myEngine)

  //6)Draw the shape
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  rect(ground2.position.x,ground2.position.y,100,20);

  ellipse(ball2.position.x,ball2.position.y,30,30);
 
}



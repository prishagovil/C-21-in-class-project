const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ballOptions =  {
    restitution: 1
  }

  ball = Bodies.circle (200,50,20, ballOptions) 
  World.add (world,ball)

  button1= createImg ("right.png")
  button1.position (50,100)
  button1.size (50,50)
  button1.mouseClicked (hforce)

  button2= createImg ("up.png")
  button2.position (100,100)
  button2.size (50,50)
  button2.mouseClicked (vforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse (ball.position.x, ball.position.y, 20,20)
}
function hforce () {
  Matter.Body.applyForce (ball,ball.position, {x:0.04,y:0})
}

function vforce () {
  Matter.Body.applyForce (ball,ball.position,{x:0,y: -0.04})
}
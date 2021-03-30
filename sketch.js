const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,800,10,options);
  World.add(world,ground)
  var options_ball={
    restitution:0.8
  }
  ball=Bodies.circle(200,200,40,options_ball)
 World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40);
  
}
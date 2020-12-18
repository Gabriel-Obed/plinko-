const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, divisionHeight = 300, division=[], plinko=[], particle=[]


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

   
  ground = new Ground(width/2, 650, width, 20);

  for(var k = 0; k <=width; k = k + 80){
    division.push(new Division(k, 800-300/1.2, 10, 200));
  }
  for(var j = 40; j <= width; j = j+50){
    plinko.push(new Plinko(j , 75, 5))
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinko.push(new Plinko(j , 175, 5))
  }
  for(var j = 40; j <= width; j = j+50){
    plinko.push(new Plinko(j , 275, 5))
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinko.push(new Plinko(j , 375, 5))
  }
  
}

function draw() {
  Engine.update(engine);

  background(0); 
  ground.display(); 
  for(var k = 0; k < division.length; k++){
    division[k].display();
  }
  for(var k  = 0; k < plinko.length; k++){
    plinko[k].display();
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2+10, width/2-10),10, 10));    
  }
 
  for(var j = 0; j < particle.length; j++){
    particle[j].display();
  }
   
  drawSprites();
}
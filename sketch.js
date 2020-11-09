var survivalTime=0;
var score=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  

  
}


function draw() {
  background("blue");
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:",survivalTime,100,50);

  if(monkey.isTouching(FoodGroup)){
    score = score+1;
  }
  food();
  Obstacle();
}
function food(){
  FoodGroup.add(banana);
  if(frameCount%80===0){
    banana = createSprite(300,10,20,20);
    banana.y = Math.round(random(120,210));
    banana.addImage(bananaImage);
  }
  banana.lifeTime=210;
  
}
function Obstacle(){
  obstacleGroup.addGroup(Obstacle);
  if(frameCount%100===0){
    var obstacle = createSprite(300,500,10,10);
    obstacle.addImage(obstacleImage);
  }
  Obstacle.lifetime=500;
}






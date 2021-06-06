var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,480);
  //create monkey
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.debug=true;
//  create moving ground
  ground=createSprite(300,350,600,15)
ground.debug=true;
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background("white");
  
  //jumping and gravity
  
  if(keyDown("space")&&monkey.y>300){
    monkey.velocityY=-18
  }
 monkey.velocityY+=1;
  
 monkey.collide(ground);

  if(monkey.y>300){
    monkey.y--;
  }
  
  drawBanana()
  makeObstacle();
drawSprites();
  
}


function drawBanana(){
  
  if(frameCount%80==0){
    banana=createSprite(480,random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3
    banana.lifetime=150;
    foodGroup.add(banana);
  }
}

function makeObstacle(){
  if(frameCount%100==0){
    obstacle=createSprite(480,330)
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
}




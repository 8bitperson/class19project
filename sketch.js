var a,aimg
var score
var obstacle,obstaclesgroup,objectimg
var background
var gamestate = "play"
var invisibleGround

function preload(){
   
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    a = createSprite(200,windowHeight-60,100,100);
    a.velocityY = 0
    invisibleGround = createSprite(windowWidth,windowHeight-25,400,10);
    invisibleGround.visible = false;
}

function draw() {
    background(150, 0, 200);
    drawSprites()
  if (gamestate == "play"){
      score = frameCount/3
      Math.round(score)
      objective()
      if(keyDown("space") && a.y === windowHeight - 80){
        a.velocityY = a.velocityY + 20
        if(a.velocityY = 20 && a.isTouching(invisibleGround)){
          a.velocityY
        }
      }
      if(a.y > 0){
        a.y = a.y - 1
        
      }
      a.collide(invisibleGround)

      if(a.touches(obstaclesgroup)){
        gamestate = "end   "
      }
   }
  else if(gamestate == "end"){
      destroy(obstaclegroup,a)
  }
}
function objective(){
    
    if(frameCount % 100 === 0) {
     var randheight = Math.round(random(30,90));
     var randwidth = Math.round(random(30,90));
     obstacle = createSprite(windowWidth,windowHeight-60,randwidth,randheight);
     obstacle.debug = true;
     obstacle.velocityX = -(6 + 3*score/100);
     obstacle.velocityY = 1     
     obstacle.collide(invisibleGround)
     obstaclegroup = createGroup()
     obstaclegroup.add(obstacle)
    } 
}
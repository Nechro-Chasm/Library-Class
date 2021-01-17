var fixedRectangle
var movingRectangle
var rect1
var rect2
var rect3
var rect4

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(400, 200, 50, 80);
  movingRectangle = createSprite(600,200,80,30);

  rect1 = createSprite(400,500,20,40);
  rect1.shapeColor = "yellow";

  rect2 = createSprite(200,50,50,10);
  rect2.shapeColor = "blue";

  rect3 = createSprite(10,380,80,100); 
  rect3.shapeColor = "orange";

  rect4 = createSprite(1000,500,60,70);
  rect4.shapeColor = "black";



  fixedRectangle.velocityX = 0.5;
  movingRectangle.velocityX = - 0.5;
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";

  
}

function draw() {
  background(255);  
  rect1.x=World.mouseX;
  rect1.y=World.mouseY;
  //console.log(movingRectangle.x - fixedRectangle.x);
  //console.log(movingRectangle.width/2 + fixedRectangle.width/2);

if (isTouching(rect1,rect2)){
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";

}
 else {
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "blue";


 }
 bounceOff(movingRectangle, fixedRectangle)
  drawSprites();
}



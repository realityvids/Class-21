var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 5;
  fixedRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  /*
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//Is touching getting checked1
  if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}
  */
 bounceOff(movingRect,fixedRect);
drawSprites();
}








var block, block2;

function setup() {
  createCanvas(800,400);
  block = createSprite (400, 200, 20, 20);
  block.shapeColor  ="red"; 
  block2 = createSprite (380, 160, 20, 20);
  block2.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);
  block2.x = mouseX ;
  block2.y = mouseY;  
  if(block2.x - block.x < block2.width/2 + block.width/2 && 
    block.x - block2.x < block2.width/2 + block.width/2 &&
    block.y - block2.y < block2.height/2 + block.height/2 &&
    block2.y - block.y < block2.height/2 + block.height/2s) {
    block2.shapeColor = "black";
    block.shapeColor = "black";
  }
  else {
    block.shapeColor = "red";
    block2.shapeColor = "yellow";
  }
  drawSprites();
}
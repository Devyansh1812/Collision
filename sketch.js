function setup() {
  createCanvas(800,400);
  Box=createSprite(400, 200, 50, 50);
  Box.shapeColor=("Red");
  Box2=createSprite(400,250,50,50);
  Box2.shapeColor=("Blue");
}

function draw() {
  background(255,255,255);  
  Box.x=mouseX;
  Box.y=mouseY;
  if(Box.x-Box2.x<Box2.width/2+Box.width/2
    && Box2.x-Box.x<Box.width/2+Box2.width/2
    && Box.y-Box2.y<Box2.height/2+Box.height/2
    && Box2.y-Box.y<Box.height/2+Box2.height/2){
      Box.shapeColor="Green";
      Box2.shapeColor="Purple";
    }
  else{
    Box.shapeColor="Red";
    Box2.shapeColor="Blue";
  }
  drawSprites();
}
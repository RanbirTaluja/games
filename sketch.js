var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,100,100)

}

function draw() 
{
  background(30);
box.x = mouseX
if(keyDown("w")){
  box.y = box.y + 5
}
  drawSprites()
}





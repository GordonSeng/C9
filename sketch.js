var box
function setup() {
  createCanvas(500,600);
  box = createSprite(250,300,50,50)
}

function draw() 
{
  background(30);

  if(keyDown(RIGHT_ARROW)){
    box.x += 4
  }
  if(keyDown(LEFT_ARROW)){
    box.x -= 4
  }
  if(keyDown(UP_ARROW)){
    box.y -= 5
  }
  if(keyDown(DOWN_ARROW)){
    box.y += 5
  }

  
  drawSprites()
}





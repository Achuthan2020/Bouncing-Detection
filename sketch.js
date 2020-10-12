var movingrect,fixedrect
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";
movingrect.velocityY=-5;
fixedrect.velocityY=5;
}


function draw() {
  background(255,255,255);  

  if (movingrect.x-fixedrect.x<movingrect.width/2 +fixedrect.width/2
    &&fixedrect.x-movingrect.x<movingrect.width/2 +fixedrect.width/2){
      movingrect.velocityX=movingrect.velocityX*(-1);
      fixedrect.velocityX=movingrect.velocityX*(-1) ;
      
  }
  
  if (movingrect.y-fixedrect.y<movingrect.width/2 +fixedrect.width/2
    &&fixedrect.y-movingrect.y<movingrect.width/2 +fixedrect.width/2){
      movingrect.velocityY=movingrect.velocityY*(-1);
      fixedrect.velocityY=movingrect.velocityY*(-1) ; 
    }
  console.log(movingrect.x);
  drawSprites();
}
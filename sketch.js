var nino, ninoImg;
var camino,caminoImg;

function preload(){
 ninoImg=loadAnimation("jake3.png","jake5.png");
 caminoImg=loadImage("path.png");
 
}

function setup(){
  createCanvas(400,400);
  camino=createSprite(200,200);
  camino.addImage(caminoImg);
  camino.velocityY=4;
  nino=createSprite(200,200,20,50);  
  nino.addAnimation("c",ninoImg);
  

}


  function draw() {
    background("black");
    nino.x=World.mouseX;  //seguir el mouse
    if (camino.y>400){
      camino.y=height/2;    //height(altura)
    }
   drawSprites();
  }
 

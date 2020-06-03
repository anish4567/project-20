var bullet, wall
var speed, weight



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.shapeColor=color(255)
  wall=createSprite(1400,200,40,height/2);
  wall.shapeColor="blue"
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  
  
if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX = 0
var deformation = 0.5 * weight * speed * speed/22509
//bullet.shapeColor("white");
//thickness=random(22,83);
//wall.shapeColor(80,80,80);
///speed=random(223,321);
//weight=random(30,52);
//car.shapeColor=color(230,230,0);
if(deformation<100){
car.shapeColor=color(230,230,0);
}
if(deformation>100 && deformation<180)
car.shapeColor=color(0,255,0);

if(deformation>180){
car.shapeColor=color(255,0,0);
}
}
drawSprites();
}






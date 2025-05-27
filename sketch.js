let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(0);
   background(" #f9b5c2");
  let distanciaX; //cateto
  let distanciaY; //cateto
  let distancia; //hipotenusa
  distanciaX = mouseX - x; //diferença de distancia X
  distanciaY = mouseY - y; //diferença de distancia Y
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY); //teorema de Pitágoras
  distancia = dist(mouseX,mouseY,x,y) //função nativa para calcular distancia
 
  circle(mouseX, mouseY, distancia);
  console.log(distancia); //revela o valor da hipotenusa

  dist(mouseX,mouseY,x,y)

  if (distancia < 3) { //se posicaoX do mouse for igual a X
    text("Encontrei!", 200, 200); //entao mostrara o texto "encontrei"
    noLoop();
  }
if (distancia > 150){
   fill ("blue")
   circle (mouseX, mouseY, distancia)
} else if (distancia > 100){
    fill ("yellow")
    circle (mouseX,mouseY,distancia)
} else if (distancia > 75){
  fill ("orange")
  circle (mouseX,mouseY,distancia)
} else if (distancia > 15){
    fill("red")
    circle (mouseX,mouseY,distancia)
  }
}
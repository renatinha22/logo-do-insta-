// variáveis da tela;
let larguraDaTela = 940;
let cumprimentoDaTela = 800;

// variáveis do retangulo;
let larguraDoRetangulo = 70;
let alturaDoRetangulo = 80;
let alturaDoRetanguloExterno = alturaDoRetangulo + 20;
let larguraDoRetanguloExterno = larguraDoRetangulo + 20;



function setup() {
  createCanvas(larguraDaTela, cumprimentoDaTela);
  background("#40E0D0");
  
}

function draw() {
  
  if(mouseIsPressed){
    
  strokeWeight(5)
  stroke(random(0,250), random(0,250), random(0,250))
  fill(0,225,0)
    
  rect(mouseX,mouseY, larguraDoRetanguloExterno, alturaDoRetanguloExterno,10);
  rect(mouseX + 10,mouseY + 10, larguraDoRetangulo, alturaDoRetangulo,10  );
    
    
  circle((mouseX +  10 ) + larguraDoRetangulo/2  , (mouseY + 10 ) + larguraDoRetangulo/ 2, 20);
circle((mouseX + 35 )  + larguraDoRetangulo /2  , (mouseY + -5) + alturaDoRetangulo/ 2, 5);




  
  }  
}
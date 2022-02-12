var bancoDeDados;
var estadoJogo = 0
var contagemJogadores = 0;
var jogo;
var chao1, chao2;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;
var trexImg;
var soloImg;
var grupoObstaculos;
var form;
var player;
var todosJogadores;
var trex, trex1, trex2;


function preload(){

  trexImg = loadAnimation("trex1.png","trex3.png","trex4.png");

  obstaculo1 = loadImage("obstacle1.png");
  obstaculo2 = loadImage("obstacle2.png");
  obstaculo3 = loadImage("obstacle3.png");
  obstaculo4 = loadImage("obstacle4.png");
  obstaculo5 = loadImage("obstacle5.png");
  obstaculo6 = loadImage("obstacle6.png");

  soloImg = loadImage("ground2.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bancoDeDados = firebase.database();

  jogo = new Jogo();
  jogo.obterEstado();
  jogo.inicio();

  
  

  grupoObstaculos = new Group();


}

function draw() {
  background(180);  
  console.log("contagem de jogadores = "+ contagemJogadores)
  
  if(contagemJogadores == 2){
    jogo.atualizarEstado(1);
  }

  if(estadoJogo == 1){
    jogo.jogar();
    
  }

  
  
  
}

function gerarObstaculos(){
  if(frameCount % 60 == 0){
  

    var obstacle1 = createSprite(windowWidth + 50, windowHeight/2 - 35, 10,10);
    obstacle1.velocityX = -5; 
    obstacle1.scale = 0.9;
    obstacle1.lifetime = 450;


    var obstacle2 = createSprite(windowWidth + 50, windowHeight -45, 10,10);
    obstacle2.velocityX = -5;
    obstacle2.scale = 0.9;
    obstacle2.lifetime = 450;

    var rand = Math.round(random(1,6) );
    switch(rand){
      
      case 1 : 
        obstacle2.addImage(obstaculo1);
        obstacle1.addImage(obstaculo1);
      break

      case 2 : 
      obstacle2.addImage(obstaculo2);
      obstacle1.addImage(obstaculo2);
      break

      case 3 : 
      obstacle2.addImage(obstaculo3);
      obstacle1.addImage(obstaculo3);
      break

      case 4 : 
      obstacle2.addImage(obstaculo4);
      obstacle1.addImage(obstaculo4);
      break

      case 5 : 
      obstacle2.addImage(obstaculo5);
      obstacle1.addImage(obstaculo5);
      break

      case 6 : 
      obstacle2.addImage(obstaculo6);
      obstacle1.addImage(obstaculo6);
      break

    }

    grupoObstaculos.add(obstacle1);

    grupoObstaculos.add(obstacle2);


  }

}

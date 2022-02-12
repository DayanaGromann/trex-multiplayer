class Jogo{
    constructor(){}

    obterEstado(){
        var estadoJogoRef = bancoDeDados.ref('estadoDeJogo');
        estadoJogoRef.on('value', function(data){
            estadoJogo = data.val();
        })
    }

    atualizarEstado(estado){
        bancoDeDados.ref('/').update({
            estadoDeJogo : estado
        })
    }

    async inicio(){
        if(estadoJogo === 0 ){

            player = new Player();
            var ref = await bancoDeDados.ref('contagemJogadores').once("value");
            if (ref.exists()) {
                contagemJogadores = ref.val();
                player.contagemDeJogadores();
            }

            form = new Formulario();
            form.display();
            
        }

        trex1 = createSprite(100, 300);
        trex1.addAnimation("correndo", trexImg);

        trex2 = createSprite(100, 650);
        trex2.addAnimation("correndo", trexImg);

        trex = [trex1, trex2];

        chao1 = createSprite(windowWidth/2,windowHeight/2, windowWidth,10);
        chao1.addImage(soloImg);

        chao2 = createSprite(windowWidth/2,windowHeight-10, windowWidth,10);
        chao2.addImage(soloImg);
    }

    jogar(){
        form.esconder();

        Player.obterInfoJogadores();
        var indice = 0
        var y = 0

        //esse for percorre todos os jogadores do banco de dados
        for(var plr in todosJogadores){

            //cada jogador recebe um valor de índice maior que o anterior
            indice += 1;

            y = trex[indice - 1].y
            todosJogadores[plr].y = y
             
            if(indice == player.index){

                var nome = todosJogadores[plr].nome
                text("nome" ,100,y-100);

                if (keyIsDown(32) && player.index !== null) {
                    trex[indice - 1].velocityY = -12
                        
                }
    
                trex[indice - 1].velocityY = trex[indice - 1].velocityY + 0.5;

                
            }

            if(grupoObstaculos.isTouching(trex[indice - 1])){
                player.eliminado = true;
                player.atualizarInfo();
            }
           


        }    
        trex1.collide(chao1);
        trex2.collide(chao2);

        gerarObstaculos();
        drawSprites();
        
    }
}


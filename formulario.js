class Formulario{
    constructor(){

        this.input = createInput("Nome");
        this.button = createButton("JOGAR");
        this.titulo = createElement("h2");
        this.saudacao = createElement("h2");
        this.reset = createButton("reiniciar DB")
    }

    esconder(){
        this.input.hide()
        this.button.hide()
        this.titulo.hide()
        this.saudacao.hide()
    }
    display(){
        this.titulo.style("font-size", "50px");
        
        this.titulo.html("T-Rex Multiplayer");
        this.titulo.position(500,50);
        this.input.style("height", "30px");
        this.input.style("width", "200px");
        this.input.position(500,300);
        this.button.position(560,350);
        this.button.style("height", "25px");
        this.button.style("width", "100px");

        this.reset.position(50,50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.nome = this.input.value();
            contagemJogadores +=1;
            player.index = contagemJogadores;
            player.atualizarContagemJogadores(contagemJogadores); 

            
            switch(contagemJogadores){
                case 1: player.y = 300;
                break;
                case 2: player.y = 650;
                break;
            }

            player.atualizarInfo();
            
            

            this.saudacao.html("Olá " + player.nome+ ", Aguarde o outro jogador...")
            this.saudacao.position(400,250);

        })

        this.reset.mousePressed(()=>{
            atualizarContagemJogadores(0);
            atualizarEstado(0);
        });

    }

}

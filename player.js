class Player{
    constructor(){
        this.nome = null
        this.index = null
        this.y = null
        this.score = 0
        this.eliminado = false;
    }


     contagemDeJogadores(){
        bancoDeDados.ref('contagemJogadores').on('value', (data)=>{
            contagemJogadores = data.val()
        })
     }

     atualizarContagemJogadores(contagemDeJogadores){
         bancoDeDados.ref('/').update({
             contagemJogadores : contagemDeJogadores
            })
     }

     atualizarInfo(){
        var playerIndex = "players/player" + this.index
            bancoDeDados.ref(playerIndex).set({
            name : this.nome,
            y: this.y,
            score: this.score,
            eliminado: this.eliminado
        })

     }


     static obterInfoJogadores(){
         var ref = bancoDeDados.ref('players');
         ref.on("value",(data)=>{
            todosJogadores = data.val();
         })

         
     }





}
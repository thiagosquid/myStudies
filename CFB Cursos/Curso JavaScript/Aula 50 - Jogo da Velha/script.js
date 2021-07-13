var palavras = ['banana','carro','computador','bola','brinquedo','sapato','maçã'];
var palavraSel = [];
var iniciar = document.getElementById('btIniciar');
iniciar.addEventListener('click',inicia);
var tamPalavra;
var espaços;
var mostra = document.getElementById('palavraIncompleta')
var chances;
var letra;
var acerto = 0;

var botoes = document.body.querySelectorAll(".btLetra");

function inicia(){
    var sorteio = Math.floor(Math.random()*(palavras.length));
    palavraSel = palavras[sorteio];
    tamPalavra = palavraSel.length;
    espaços = [];
    chances = 5;
    exibirPalavra(tamPalavra);
    console.log(`A palavra é ${palavraSel}`)
}

function exibirPalavra(tam){
    var impr = '';
    for(var i = 0; i < tam; i++){
        espaços[i] = '_'
        impr += espaços[i];
    }
    mostra.innerHTML = impr;
    pegaLetra();
}

function pegaLetra(){
    for(var x=0; x<botoes.length; x++){
        botoes[x].addEventListener("click", function(){
            document.body.querySelector("#letraSel").value = this.value;
            letra = this.value;  
            if(chances > 0){
                verificaLetra();
                }
        });
    } 
}


function verificaLetra(){
    
    for(var i = 0; i < tamPalavra; i++){
            if(letra == palavraSel[i]){
                espaços[i] = letra;
                acerto = 1;                    
            }
    }
        if(acerto == 0){
            chances -= 1;
        }else if(acerto ==1){
            var impr = '';
            for(var i = 0; i < tamPalavra; i++){
                impr += espaços[i];
            }
            mostra.innerHTML = impr;
            console.log(chances);
            pegaLetra();
        }else{
            alert('acabou');
        }
}









let lista = ['presunto', 'computador', 'carro', 'bicicleta','bola','sapato'];
let palavraSel;
let palavraOculta;
let tamPal;
let spaces = [];

let letreiro = document.getElementById('impr');
let inicia = document.getElementById('btInicia');
let letra='';

inicia.addEventListener('click', recebePalavra);

let botoes = document.body.querySelectorAll(".word");

// Pra gerar eventListener de todas as letras

for(let x=0; x<botoes.length; x++){
   botoes[x].addEventListener("click", function(){
    letra = this.value;
    verificaLetra(letra);
   });
}

function recebePalavra(){
    let impr = '';
    palavraSel = Math.floor(Math.random()*lista.length);
    tamPal = lista[palavraSel].length;
    palavraOculta = lista[palavraSel];
    console.log(`A palavra selecionada é ${palavraOculta}`);
    for(var i = 0; i < tamPal; i++){
        spaces[i] = '_';
        impr += spaces[i];
    }
    imprimeTexto(impr)
}


function imprimeTexto(pal){
    var upper = pal.toUpperCase();
    letreiro.innerHTML = upper;
}

function verificaLetra(l){
    let cont = 0;
    var imp = '';    
        for(cont = 0; cont < tamPal; cont++){
            if(l == palavraOculta[cont]){
                spaces[cont] = l;
            }
        }
    alteraImpressao();
}

function alteraImpressao(){
    impr = '';
    for(var i = 0; i < tamPal; i++){
        impr += spaces[i];
    }
    imprimeTexto(impr)
}
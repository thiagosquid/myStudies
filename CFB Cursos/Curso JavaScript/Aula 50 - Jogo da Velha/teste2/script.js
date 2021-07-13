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
    console.log(`A letra clicada é >>> ${letra}`);
    verificaLetra(letra);
   });
}

function recebePalavra(){
    //spaces = '';
    palavraSel = Math.floor(Math.random()*lista.length);
    tamPal = lista[palavraSel].length;
    palavraOculta = lista[palavraSel];
    console.log(`A palavra selecionada é ${palavraOculta}`);
    console.log(tamPal);
    for(var i = 0; i < tamPal; i++){
        spaces += '_';
    }
    imprimeTexto(spaces)
}


function imprimeTexto(pal){
    var upper = pal.toUpperCase();
    letreiro.innerHTML = upper;
}

function verificaLetra(l){
    let cont = 0;
    var imp = '';
    console.log(lista[palavraSel].indexOf(l));
    let pos = lista[palavraSel].indexOf(l);
        if(pos > -1){
            for(cont = pos; cont < tamPal; cont++){
                if(l == palavraOculta[cont]){
                    spaces[cont] = l;
                    console.log(`chegou aqui - ${l}`);
                }
            }
        }
        for(cont = 0; cont < tamPal; cont++){
            
            imp += spaces[cont];
        }
    console.log(imp);
}
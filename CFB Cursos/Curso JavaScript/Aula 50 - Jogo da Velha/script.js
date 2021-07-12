var palavras = ['banana','carro','computador','bola','brinquedo','sapato'];
var sorteio = Math.floor(Math.random()*(palavras.length));
sorteio = 0 //APENAS PARA FACILITAR A CONSTRUÇÃO APAGAR DEPOIS
var palavraSel = palavras[sorteio]; //armazena a palavra sorteada
var tamPalavra = palavraSel.length; //armazena o tamanho dessa palavra
var espaços = []; //solução para impressão dos espaços no log
var letra;
var chances = 5;

for(var i = 0; i < tamPalavra; i++){
    espaços[i] = '_'
}

console.log(espaços)
console.log(`A palavra tem ${tamPalavra} letras`)

letra = 'a';

while(chances > 0){
    if(palavraSel.indexOf(letra) > -1){
        for(var i = palavraSel.indexOf(letra); i < tamPalavra; i++){
            if(letra == palavraSel[i]){
                espaços[i] = letra;
            }
        }
    }else{
        chances -= 1;
    }
    chances -= 1;
    letra = 'b'
}
console.log(espaços);






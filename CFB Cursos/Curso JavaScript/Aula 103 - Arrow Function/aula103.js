/*Arrow Function = Função de Seta _Grande_

(parâmetros) => {expressão}

ser for apenas um parâmetro não precisa do par~enteses
a expressão tbm se for curta não precisa de {}
*/

let soma = (...num) => {
    let r = 0;
    for (n of num){
        r+=n;
    }
    return r;
}

const par = (num) => {
    if(num%2 == 0){
        return true
    }else{
        return false
    }
}

console.log(soma(2,4,5,7))
console.log(par(soma) ? "É par" : "Não é par")
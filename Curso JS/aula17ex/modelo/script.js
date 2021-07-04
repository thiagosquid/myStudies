function maior(arg){
    arg.sort(function(a, b) {
        return a - b;
      });
    return arg[arg.length - 1]
} 

function menor(arg){
    arg.sort(function(a, b) {
        return a - b;
      });
    return arg[0]
}

function soma(arg){
    let soma = 0
    for(let i = 0; i < arg.length; i++){
        soma += arg[i]
    }
    return soma
}

function media(arg){
    let media = soma(arg) / arg.length
    return media
}

let num = []

function adc(){
    let cont = num.length
    let entrada = Number(document.getElementById('cxnum').value)
    let res = document.querySelector('div#res')
    res.innerHTML = ``
    
    if(num.indexOf(entrada) != -1 || entrada < 1 || entrada > 100){
        alert("Valor inválido ou já existente")
    } else {
        num.push(entrada)
        let lista = document.getElementById('selnum')
        let cad = document.createElement('option')
        cad.text = `Número ${num[cont]} adicionado`
        lista.appendChild(cad)
    }
}

function resumo(){
    if(num.length == 0){
        alert("Nenhum número cadastrado!")
    } else {
    let res = document.querySelector('div#res')
    res.innerHTML = `Ao todo temos ${num.length} números cadastrados.<br>
    O maior número é ${maior(num)}<br>
    O menor valor é ${menor(num)}<br>
    Somando todos os valores temos ${soma(num)} <br>
    A média dos valores digitados é ${media(num)}
    `
    }

}
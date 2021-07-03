function contar(){
    var inicio = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.querySelector('div#res')
    var numero = inicio
   
    if(inicio.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert(`[ERRO] faltam dados`)
        if(passo == 0){
            window.alert(`[ERRO] faltam dados`)
        }
    } else if (inicio < fim){
        res.innerHTML = `Contando: <br>`
        res.innerText += `${numero} `
        numero = numero + passo
        while(numero <= fim){
              res.innerText += `\u{1F449} ${numero} `
               numero = numero + passo
            }
    }else if (inicio > fim){
        res.innerHTML = `Contando: `
        res.innerText += `${numero} `
        numero = numero - passo
        while(numero >= fim){
              res.innerText += `\u{1F449} ${numero} `
               numero = numero - passo
            }
    }
}
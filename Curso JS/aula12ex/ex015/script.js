function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                //criança
                img.setAttribute('src', 'fotos/criança-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotos/idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                //criança
                img.setAttribute('src', 'fotos/criança-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotos/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.<br>`
        res.appendChild(img)
    }
}
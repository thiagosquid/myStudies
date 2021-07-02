function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#dcd8cc'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#eaac3f'
    }else{
        //Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1b4a66'
    }


}
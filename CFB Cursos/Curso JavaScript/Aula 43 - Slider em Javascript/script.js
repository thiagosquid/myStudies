var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;

window.addEventListener('load',inicia);

function preCarregamento(){
    var s = 1;
    for(var i = 0; i < 5; i++){
        imgs[i] = new Image();
        imgs[i].src="imgs/s"+s+".png";
        s++;
    }

}

function carregarImg(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

function inicia(){
    preCarregamento();
    imgAtual = Math.floor(Math.random()*5);
    maxImg = imgs.length -1;
    slider = document.getElementById('dvslider');
    carregarImg(imgAtual);
    //tmp = setInterval(troca, 2000);
}

document.addEventListener("keydown", troca)
function troca(){
    var key = event.key;
    if(key == "ArrowRight"){
        imgAtual++;
        if(imgAtual > maxImg){
            imgAtual = 0;
        }
    }else if (key == "ArrowLeft"){
        imgAtual--;
        if(imgAtual < 0){
            imgAtual = maxImg;
        }
    }
    // imgAtual++;
    //     if(imgAtual > maxImg){
    //         imgAtual = 0;
    //     }
    carregarImg(imgAtual);
}
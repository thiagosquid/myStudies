var tmp;

function mudaCor(){
    var obj = document.getElementById('dv1');
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    obj.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function iniciar(){
    clearInterval(tmp);
    var tempo = Number(document.getElementById('cxtemp').value);
    tempo = tempo * 1000;
    tmp = setInterval(mudaCor, tempo);   
}

function parar(){
    clearInterval(tmp);
}

var obj = document.getElementById('bt1').addEventListener("click",iniciar);
var obj = document.getElementById('bt2').addEventListener("click",parar);
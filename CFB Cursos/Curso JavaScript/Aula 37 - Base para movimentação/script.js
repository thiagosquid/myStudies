var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;

window.addEventListener('load', inicia);

function inicia(){
    dx= 0;
    dy= 0;
    px= 0;
    py= 0;
    vel= 1;
    obj = document.getElementById('dv1');
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
    tmp = setInterval(enterFrame,1);
    //console.log(dx)
}

function teclaDw(){
    var tecla = event.key;
    if(tecla == "ArrowLeft"){
        dx = -1;
    }else if(tecla == "ArrowUp"){
        dy = -1;
    }else if(tecla == "ArrowRight"){
        dx = 1;
    }else if(tecla == "ArrowDown"){
        dy = 1;
    }
}

function teclaUp(){
    var tecla = event.key;
    if(tecla == "ArrowLeft"){
        dx = 0;
    }else if(tecla == "ArrowUp"){
        dy = 0;
    }else if(tecla == "ArrowRight"){
        dx = 0;
    }else if(tecla == "ArrowDown"){
        dy = 0;
    }
}

function enterFrame(){
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px+"px";
    obj.style.top = py+"px";
}

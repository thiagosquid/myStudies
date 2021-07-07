var jog = document.getElementById('jogador');
var vel = 3;
var dx = 1;
var dy = 0;
var px = 120;
var py = 0;
var anima;
window.addEventListener('load',game)
jog.addEventListener("click",function(){
    cancelAnimationFrame(anima);
});

function game(){
    px += dx * vel;
    //py += dy * vel;
    jog.style.left = px+'px';
    //jog.style.top = py+'px';

    if(px > 400){
        dx = -1;
    }else if(px <= 120){
        dx = 1;
    }
    anima = requestAnimationFrame(game);
}
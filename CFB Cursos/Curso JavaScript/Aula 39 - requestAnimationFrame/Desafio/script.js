var jog = document.getElementById('jogador');
var vel = 3;
var dx = 1;
var dy = 1;
var px = 120;
var py = 0;
var anima;
var test = 0;

window.addEventListener('load',game);

jog.addEventListener("click",function(){
    if(test == 'parou'){
        game();
        test = 'iniciou';
    }else{
        cancelAnimationFrame(anima);
        jog.style.backgroundColor= '#000';
        test = 'parou';
    }
});
document.getElementById('iniciar').addEventListener("click",function(){
    cancelAnimationFrame(anima);
    jog.style.backgroundColor= '#00F';
    test = 'iniciou';
    game();
});
document.getElementById('parar').addEventListener("click",function(){
    var para = cancelAnimationFrame(anima);
    jog.style.backgroundColor= '#000';
    test = 'parou';
});


function game(){
    jog.style.backgroundColor= '#00F';
    test = anima + 1;
    px += dx * vel;
    py += dy * vel;
    jog.style.left = px+'px';
    jog.style.top = py+'px';

    if(px > 470){
        dx = -1;
        dy = Math.random();
    }else if(px <= 120){
        dx = 1;
        dy = Math.random();
    }else if(py <= 0){
        dy = 1;
        dx = Math.random();
    }else if(py > 350){
        dy = -1;
        dx = Math.random();
    }
    anima = requestAnimationFrame(game);
}
var larg, alt, px, py;
var botao = document.getElementById('btn')
var painel = document.getElementById('painel');

botao.addEventListener('click',info)

function info(){
    larg = window.innerWidth; //outerWidth - largura externa
alt = window.innerHeight; //outerHeight - altura externa
    px = window.screenX;
    py= window.screenY;
    painel.innerHTML = `Largura: ${larg}<br>Altura: ${alt}<br>Pos X: ${px}<br>Pos Y: ${py}`;
}

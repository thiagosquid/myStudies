var larg, alt, px, py;

var painel = document.getElementById('painel');

document.getElementById('btnTam').addEventListener('click',info);
document.getElementById('btnPos').addEventListener('click',rolar);

function rolar(){
    window.scrollBy(500,500);
}


function info(){
    larg = window.innerWidth; //outerWidth - largura externa
alt = window.innerHeight; //outerHeight - altura externa
    px = window.screenX;
    py= window.screenY;
    painel.innerHTML = `Largura: ${larg}<br>Altura: ${alt}<br>Pos X: ${px}<br>Pos Y: ${py}`;
}

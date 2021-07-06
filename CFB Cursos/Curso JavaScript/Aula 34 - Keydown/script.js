var px=0;
var py=0;

function move(){
    var obj = document.getElementById('dv1');
    obj.style.backgroundColor = "#f00";
    var tecla= event.key;
    
    //37=Esquerda - 38=cima - 39=direita - 40=baixo
    
    //alert(tecla)
    if(tecla == 'ArrowLeft'){
        px-=10;
        obj.style.left = px+"px";
    }else if(tecla == 'ArrowUp'){
        py-=10;
        obj.style.top = py+"px";
    }else if(tecla == 'ArrowRight'){          
        px+=10;
        obj.style.left = px+"px";
    }else if(tecla == 'ArrowDown'){       
        py+=10;
        obj.style.top = py+"px";
    }else if(tecla == 13){       
        alert('Evento Keydown Removido');
        document.removeEventListener("keydown",move);
        obj.style.backgroundColor('#000');
    }
}

// function inicia(){
//     var obj = document.getElementById('dv1');
//     obj.addEventListener("keydown",move);
// }

// var obj = document.getElementById('dv1');    
// obj.addEventListener('click',inicia);

document.addEventListener("keydown",move);
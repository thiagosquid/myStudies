var px=0;
var py=0;
var obj = document.getElementById('dv1');
obj.addEventListener("click",inicia);

function inicia(){  
    document.addEventListener("keydown",move);
    obj.style.backgroundColor = "#f00"   
}

function move(){
    var obj = document.getElementById('dv1');
    var tecla= event.key;
    
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
    }else if(tecla == 'Enter'){    
        alert('Evento Keydown Removido');
        document.removeEventListener("keydown", move);
        console.log('bloco 1');
        obj.style.backgroundColor= '#fff'; 
        console.log('bloco 2');   
    }
}
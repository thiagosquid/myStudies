let xhr = new XMLHttpRequest();
let documento;

/*
readyState >>> indica o estado do objeto
status >>> é uma resposta do servidor
*/

xhr.responseType = "json"; //usando assim o retorno passa a ser um objeto e não uma string
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
        documento = xhr.response; //retorna string
        // documento = JSON.parse(documento); //converte para JSON
        console.log(documento);
    }else{
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.send();
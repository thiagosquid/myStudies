let xhr = new XMLHttpRequest();
let documento = {
        "userId": 200,
        "id": 12,
        "title": "Notícia exclusiva",
        "body": "Desenvolvedor larga Jquery após descobrir o quão fácil é viver sem ele"
}

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr)
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

xhr.send(documento)
//retornoa 201 que representa que o post foi criado
console.log(xhr)
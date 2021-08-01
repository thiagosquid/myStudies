const http = require('http')
const fs = require('fs') //modulo fs trabalha com arquivos - talvez algo referente a file system...
const porta = process.env.PORT

const server = http.createServer((req,res) => {
    fs.appendFile('teste.txt','Curso de Node - CFB Cursos\n',(err)=>{
        if(err)throw err
        console.log("Arquivo Criado")
        res.end()
    })
});

server.listen(porta || 3000,()=>{
    console.log('Servidor Rodando')
})
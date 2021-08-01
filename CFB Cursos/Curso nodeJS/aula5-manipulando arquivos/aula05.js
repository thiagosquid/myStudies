const http = require('http')
const fs = require('fs') //modulo fs trabalha com arquivos - talvez algo referente a file system...
const porta = process.env.PORT

const server = http.createServer((req,res) => {
    fs.readFile('site.html',(err,arquivo)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
});

server.listen(porta || 3000,()=>{
    console.log('Servidor Rodando')
})
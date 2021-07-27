// .set - inclue chave, valor
// .size - retorna o tamanho do map
// .get - obtem os elementos pela chave

// let produtos = new Map() 
//para inicializar já com valores
    let produtos = new Map([
        ["01","Mouse"],
        ["02","Teclado"],
        ["03","Monitor"],
        ["04","Gabinete"]
    ])

// produtos.set("01","Mouse") // o numero tá como string
// .set("02","Teclado").set("03","Monitor").set("04","Gabinete")
//  // não precisa do nome da variável antes se for encadeado

 produtos.set("05","Memória") // altera na posição de chave igual "01"

 for(p of produtos){
     console.log(p[1])
 }
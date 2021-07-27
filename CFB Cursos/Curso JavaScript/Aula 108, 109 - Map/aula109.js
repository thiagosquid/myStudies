// .set() - inclue chave, valor
// .size - retorna o tamanho do map
// .get() - obtem os elementos pela chave
// .clear() - limpar todo o Map
// .delete() - deleta o elemento da chave indicada
// .keys() - retorna a chave, retorna um iterator, necessário dar o .next()
// .values() - retorna os valores, 
// .has() - procura uma chave no Map e retorna um bool


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

console.log(produtos.has("04") ? "Existe" : "Não existe");

function info(chave, valor){
    console.log("chave: "+chave+" - Valor: "+valor)
}

// produtos.forEach(info)

let itk = produtos.keys()
let itv = produtos.values()


console.log(itk.next().value)
console.log(itv.next().value)


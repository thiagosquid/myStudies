let num = [4, 1, 6, 5, 2,8]
num[6] = 9
num.push(7)
num.length
console.log(`Nosso vetor tem o tamanho de ${num.length}`)
console.log(`Nosso vetor é o ${num}`)
num.sort()
console.log(`Ordenado fica: ${num}`)

var pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não existe no vetor`)
}else{
    console.log(`O valor está na posição ${pos}`)
}
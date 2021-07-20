
// const aluno = {nome:'Bruno',sobrenome:"Campos"};
// const notas = {n1:80,n2:75,n3:92,n4:85};
// const info = {...aluno,...notas};

// for(var dado in info){ //retorna as propriedades do objeto, o índice.
//     console.log(info[dado])
// }

let notas = [100, 80, 75, 30, 64, 47, 98, 81, 60];
let aprovados = 0;
let reprovados = 0;


for(var n of notas){ //retorna o valor do elemento
    n>= 60 ? aprovados++ : reprovados++;
}

console.log(`Aprovados: ${aprovados}`)
console.log(`Reprovados: ${reprovados}`)
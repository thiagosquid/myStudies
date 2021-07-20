// const produtos = [
//     {
//         id: '001',
//         desc: ['Mouse','25.00']
//     },
//     {
//         id: '002',
//         desc: ['Teclado','50.00']
//     },
//     {
//         id: '003',
//         desc: ['Monitor','430.00']
//     },
// ]

// const p = [...produtos]

// console.log(p)

const aluno = {nome:'Bruno',sobrenome:"Campos"};
const notas = {n1:80,n2:75,n3:92,n4:85};
const info = {...aluno,...notas};

console.log(info.sobrenome)
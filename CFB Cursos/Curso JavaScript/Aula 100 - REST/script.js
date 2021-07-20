
// function soma(...num){ //n valores podem ser passados
//     let res = 0;
//     let qtde = num.length;
//     for(let i = 0; i < qtde; i++){
//         res += num[i];
//     }
//     return res;
// }



function soma(...num){ //n valores podem ser passados
    let res = 0;
    for(n of num){
        res += n;
    }
    return res;
}

console.log(soma(3,2,-8));
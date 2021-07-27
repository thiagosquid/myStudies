let num = [10, 1, 9, 2, 5];
let it = num[Symbol.iterator]();


for(var i = 0; i < num.length; i++){
    let v = it.next().value
    if(v%2 != 0){
    console.log("ímpar")
}else{
    console.log("par")
}
}

// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
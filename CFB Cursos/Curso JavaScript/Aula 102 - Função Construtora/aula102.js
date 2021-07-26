var x = 10;

const soma = new Function("n1,n2","return n1-n2/(n1*x)") //Function com F maiúsculo

console.log(soma(3,2));
//Para definir uma função geradora coloca-se o asterísco após o function

//O yield vai passar cada valor por vezes que a função for chamada

/*
{function* cores(){
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
    yield 'Amarelo';
    yield 'Roxo';
    yield 'Preto';
    yield 'Branco';
}

const c = cores();

console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
}
*/

function* cont(n){
    let c = 0;
    while(c < n){
        yield console.log(c);
        c++;
    }
}

const ct = cont(10);

console.log(ct.next())
console.log(ct.next())
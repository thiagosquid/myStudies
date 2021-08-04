(async () =>{
    const db = require('./db');

    // console.log('Novo cliente inserido');
    // const nom = "Armenegildo";
    // const ida = 23;
    // await db.insereCliente({nome:nom,idade:ida});
    
    // const id = 2;
    // const nom = "Nazário";
    // const ida = 30;
    // await db.atualizaCliente(id, {nome:nom,idade:ida});
    // console.log('Cliente Atualizado');

    const id = 3;
    await db.deletarCliente(id);
    console.log('Cliente Deletado');
    
    console.log('Obter todos os clientes');
    const clientes = await db.todosClientes();
    console.log(clientes);
})()
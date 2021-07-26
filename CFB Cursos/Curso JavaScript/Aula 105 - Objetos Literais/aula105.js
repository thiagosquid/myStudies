/*
{

const Veiculo = {
    marca: "VW",
    modelo: "Golf",
    info: function(){
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
}

const Caracteristicas = {
    cor: "Cinza",
    cambio: "Automatico"
}

//delete Caracteristicas.cor; //Deleta esse atributo

const Carro = Object.assign(Veiculo, Caracteristicas);

console.log(Carro)
Carro.info()


const c2 = Object.create(Carro)


c2.marca = "Honda";
c2.modelo = "HRV";

Carro["marca"] = "Chevrolet";
Carro["modelo"] = "Camaro"

Carro.info()
c2.info()


// console.log(Carro.info())
// console.log(Carro.marca +" "+Carro.modelo)

}
*/

const Carro = {
    marca: "VW",
    modelo: "Golf",
    cor: "Cinza",
    cambio: "Automatico",
    info: function(){
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
}

let {marca,modelo} = Carro;

marca = "Honda";
modelo = "HRV";

console.log(marca+' '+modelo)
console.log(Carro)


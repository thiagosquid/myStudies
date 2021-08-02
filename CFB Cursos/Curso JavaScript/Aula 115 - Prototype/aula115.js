class Carro{
    constructor(tpComb, tpCarro){
        this.tipo = tpCarro //1=Passeio, 2=Transporte, 3=Combate
        this.qtdeComb = 100;
        this.ligado = true;
        this.tipoComb = tpComb; //1=gasolina, 2=diesel, 3=etanol
    }
    info(){
        console.log("Qtd Combustível.: " + this.qtdeComb)
        console.log("Ligado..........: " + this.ligado)
        console.log("Tipo Combustível: " + this.tipoComb)
        switch(this.tipo){
        case 1:
            console.log("Tipo Carro: Passeio");
            break;
        case 2:
            console.log("Tipo Carro: Transporte");
            break; 
        case 3:
            console.log("Tipo Carro: Combate");
            break;
        default:
            console.log("Deafult") 
        }
    }
    set setLigado(t){
        this.ligado = t;
    }
    get getLigado(){
        return this.ligado;
    }
    set setComb(v){
        if(v<0 || v>100){
            alert("Valor inválido");
        }else{
            this.qtdeComb = v;
        }
    }
    get getComb(){
        return this.qtdeComb;
    }
}

//herda tudo de Carro (classe pai)
class CarroCombate extends Carro{
    constructor(potTiro){ //construtor da classe filho
        super(2,3) //Acessa o construtor da classe pai
        this.tiros = 1000;
        this.potTiro = potTiro;
        this.blindagem = 100;
    }
    info(){
        super.info()//chamando o método na classe pai
        console.log("Qtd de tiros: " + this.tiros)
        console.log("Pot. Tiro...: " + this.potTiro)
        console.log("Blindagem...: " + this.blindagem)
        console.log("----------------------------")
    }
}

class CarroTransporte extends Carro{
    constructor(){ //construtor da classe filho
        super(2,2) //Acessa o construtor da classe pai
    }
}

Carro.prototype.potencia = 500;
Carro.prototype.velocidade = 0;
Carro.prototype.velMax = 0;

Carro.prototype.info2 = function(){
    this.info();
    console.log("Potencia...: " + this.potencia);
    console.log("Velocidade.: " + this.velocidade);
    console.log("Vel. Máxima: " + this.velMax);
}

let c1 = new CarroCombate(100);
let c2 = new CarroTransporte();
// c1.info();
c1.info2();
// c2.info();
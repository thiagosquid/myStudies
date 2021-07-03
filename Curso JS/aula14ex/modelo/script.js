var n100 = 0
var n50 = 0
var n10 = 0
var n5 = 0
var n1 = 0
var saque = 337
    if((saque % 100) < saque){
        n100= (saque - (saque % 100))/100
        saque = (saque % 100)
        console.log(n100 + ' notas de 100')
    }
    if((saque % 50) < saque){
        n50= (saque - (saque % 50))/50
        saque = (saque % 50)
        console.log(n50 + ' notas de 50')
    }
    if((saque % 10) < saque){
        n10= (saque - (saque % 10))/10
        saque = (saque % 10)
        console.log(n10 + ' notas de 10')
    }
    if((saque % 5) < saque){
        n5= (saque - (saque % 5))/5
        saque = (saque % 5)
        console.log(n5 + ' notas de 5')
    }
    if((saque % 1) < saque){
        n1= (saque - (saque % 1))/1
        saque = (saque % 1)
        console.log(n1 + ' notas de 1')
    }
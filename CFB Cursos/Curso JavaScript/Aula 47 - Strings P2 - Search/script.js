
var texto = document.getElementById('txt').innerHTML;
var txt2 = " - Texto de teste";

var res = texto.concat(' - aula 47 do curso de javascript' + txt2);

document.write(`${res} <br>`);

//document.write(String.fromCharCode(res));


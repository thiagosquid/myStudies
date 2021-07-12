
var texto = document.getElementById('txt').innerHTML;

var res = texto.toUpperCase().substr(22,10);

document.write(`${res} <br>`);

//document.write(String.fromCharCode(res));


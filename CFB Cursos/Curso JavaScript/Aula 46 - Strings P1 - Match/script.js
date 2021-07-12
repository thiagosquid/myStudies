
var texto = document.getElementById('txt').innerHTML;

var res = texto.match(/\D/ig);

document.write(`${res} : ${res.length}<br>`);

document.write(res[1]);
function opt(){
var selnum = document.getElementById('selnum')
    for(var i = 1; i <= 10; i++){
        var n = document.createElement('option')
        n.text = `${i}`
        selnum.appendChild(n)
    }
}   
function tabuada(){
    var num = Number(document.getElementById('cxnum').value)
    var res = document.getElementById('seltab')
    
    res.innerHTML = ''
    for(var i = 1; i <= 10; i++){
        var sel = document.createElement('option')
        var valor = num * i
        sel.text = `${num} x ${i} = ${valor}`
        sel.value = `tab${i}`
        res.appendChild(sel)
    }
}
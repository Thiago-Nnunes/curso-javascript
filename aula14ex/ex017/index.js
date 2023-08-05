function tabuar(){
    var n = window.document.getElementById('num')
    var tab = window.document.getElementById('tab')
    if(num == 0){
        window.alert('[ERRO]Confira o valor e tente novamente')
    } else{
        var num = Number(n.value)
        var t = 1
        tab.innerHTML = ' '
        while(t<= 10){
            var item = document.createElement('option')
            item.text = `${num} x ${t} = ${num*t} `
            tab.appendChild(item)
            t++
        }
        }
}
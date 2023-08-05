    function contar(){
        var n1 = window.document.getElementById('n1')
        var n2 = window.document.getElementById('n2')
        var passo = window.document.getElementById('p')
        var res = window.document.getElementById('res')
        
        if(n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0){
            res.innerHTML=('Impossivel Contar')            
        } else{
            res.innerHTML= ('Contando:')
            var i = Number(n1.value)
            var f = Number(n2.value)
            var p = Number(passo.value)
            if( p <= 0){
                window.alert('Passo Invalido!Considerando Passo 1')
                p = 1
            }
            if(i < f){
                //contagem crescente
            for(var c = i; c <= f; c+= p ){
                res.innerHTML+= `${c}  \u{261B}`            
            }
        } else{
            //contagem regressiva
            for(var c = i; c >= f; c-= p){
                res.innerHTML+= `${c}  \u{261B}` 
            }
        }
        res.innerHTML+= `\u{1F3C1}`
    }
}
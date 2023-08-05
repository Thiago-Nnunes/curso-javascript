function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var txt = window.document.getElementById('txt')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    img.src= 'imagens/dia-redo.png'
    window.document.body.style.backgroundColor = '#FFE689'
    txt.innerHTML = 'Bom Dia!'
} else if(hora >= 12 && hora < 18){
    img.src= 'imagens/tarde-redo.png'
    document.body.style.backgroundColor = '#A56D61'
    txt.innerHTML = 'Boa Tarde!'
    
} else{
    img.src= 'imagens/noite-redo.png'
    document.body.style.backgroundColor ='#3E758D'
    txt.innerHTML = 'Boa Noite!'
}
}
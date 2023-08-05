var relogio = new Date()
var hora = relogio.getHours()
console.log(`Agora são ${hora} horas`)
 if(hora > 0 && hora <= 7){
    console.log('Boa madrugada')
}else if(hora < 12){
    console.log('Bom Dia')
} else if(hora-=18){
    console.log('Boa tarde')
}else if(hora <23){
    console.log('Boa noite')
} 
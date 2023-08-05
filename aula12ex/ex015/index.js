function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('Ano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(sex[0].checked){
            genero = 'HOMEM'
            document.body.style.backgroundColor = 'rgb(70, 142, 236)'
            if(idade >= 0 && idade <=13){
             //Criança
             img.setAttribute('src', 'imagens/crianca-mas.png')   
            } else if(idade <= 23){
                //Jovem
                img.setAttribute('src' , 'imagens/homem-jovem.png')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src' , 'imagens/homem-adulto.png')
            } else{
                img.setAttribute('src' , 'imagens/homem-experiente.png')
                //Idoso
            }
        } else if(sex[1].checked){
            genero = 'MULHER'
            document.body.style.backgroundColor = '#E1A6AD'
            if(idade >= 0 && idade <=13){
                img.setAttribute('src' , 'imagens/crianca-fem.png')
                //Criança   
               } else if(idade <= 23){
                img.setAttribute('src' , 'imagens/mulher-jovem.png')
                   //Jovem
               } else if(idade < 60){
                img.setAttribute('src' , 'imagens/mulher-adulta.png')
                   //Adulto
               } else{
                img.setAttribute('src' , 'imagens/mulher-experiente.png')
                   //Idoso
               }
        }
    }
    res.innerHTML = `Você é ${genero} de ${idade} anos de idade.`
    res.appendChild(img)
}
function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if(fano.value.length == 0 || Number (fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade>=0 && idade<14){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if (idade <25){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 61){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else {
            genero = 'mulher'
            if (idade>=0 && idade<14){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if (idade <25){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 61){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
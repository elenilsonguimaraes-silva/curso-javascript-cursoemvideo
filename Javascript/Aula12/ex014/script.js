function carregar(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = '../../imagens/manha.png'
        document.body.style.background='#dddee0'
    }else if(hora >= 12 && hora <18){
        //Boa Tarde
        img.src = '../../imagens/tarde.png'
        document.body.style.background='#b49996'
    }else{
        //Boa noite
        img.src = '../../imagens/noite.png'
        document.body.style.background='#0b1717'
    }
}
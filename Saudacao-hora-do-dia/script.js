function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()
    var minutos = data.getMinutes()

    const horaFormatada = `${hora}:${minutos < 10 ? '0' : ''}${minutos}`;

    let saudacao, imgSrc, fundo, corTexto;

    if (hora > 0 && hora < 12) {
        saudacao = 'Bom dia !!'
        imgSrc = './images/manha.jpg'
        fundo = '#0f396f'
        corTexto = '#fff'

    } else if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde !!'
        imgSrc = './images/tarde.jpg'
        fundo = '#37241f'
        corTexto = '#fff'
    } else {
        saudacao = 'Boa noite!! '
        imgSrc = './images/noite.jpg'
        fundo = '#020d1d'
        corTexto = '#fff'
    }

    msg.innerHTML = `<p>Agora sao ${horaFormatada}.</p>${saudacao}`
    document.body.style.background = fundo;
    document.body.style.color = corTexto;
    img.src = imgSrc;
}

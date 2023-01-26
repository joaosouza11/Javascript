function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  
  msg.innerHTML = `Agora são ${hora}:${minutos}h.`
  if (hora >= 0 && hora < 12) {
    img.src = 'Imagens/manha.jpg'
    document.body.style.background = '#BAD0D9'
    msg.innerHTML += '<p>Bom dia!</p>'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'Imagens/tarde.jpg'
    document.body.style.background = '#4A7A8C'
    msg.innerHTML += '<p>Boa tarde!</p>'
  } else {
    img.src = 'Imagens/noite.jpg'
    document.body.style.background = '#0367A6'
    msg.innerHTML += '<p>Boa noite!</p>'
  }
}
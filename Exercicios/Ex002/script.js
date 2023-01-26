function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var formAno = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'images/foto-bebe-m.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'images/foto-jovem-m.png')
      } else if (idade < 60) {
        img.setAttribute('src', 'images/foto-adulto-m.png')
      } else {
        img.setAttribute('src', 'images/foto-idoso-m.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'images/foto-bebe-f.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'images/foto-jovem-f.png')
      } else if (idade < 60) {
        img.setAttribute('src', 'images/foto-adulto-f.png')
      } else {
        img.setAttribute('src', 'images/foto-idoso-f.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }

}
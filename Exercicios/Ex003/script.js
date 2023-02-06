function count() {
  let start = document.getElementById('txtstart')
  let end = document.getElementById('txtend')
  let step = document.getElementById('txtstep')
  let res = document.getElementById('res')

   if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
    res.innerHTML('[ERROR] No field can be empty!')
   } else {
    res.innerHTML = 'Count: <br>'
    let sta = Number(start.value)
    let en = Number(end.value)
    let ste = Number(step.value)

    if (ste <= 0) {
      window.alert('Invalid Step! It has to be greater than 0')
      ste = 1
    }
    if (sta < en) {
      //Rising count
      for (let c = sta; c <= en; c += ste) {
        res.innerHTML += `${c} -> `
      }
    } else {
      //Countdown
      for(let c = sta; c >= en; c -= ste) {
        res.innerHTML += `${c} -> `
      }
    }
    res.innerHTML += `\u{1F3C1}`
   }
}
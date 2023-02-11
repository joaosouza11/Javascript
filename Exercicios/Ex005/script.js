let num = document.getElementById('txtnum')
let list = document.getElementById('txtlist')
let res = document.getElementById('res')
let values = []

function isNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function add() {
  if(isNum(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Number ${num.value} was added.`
    list.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Invalid value or already in the list')
  }
  num.value = ''
  num.focus()
}

function ready() {
    if (values.length == 0) {
      window.alert('Add some value before')
    } else {
      let total = values.length
      let big = values[0]
      let small = values[0]
      let sum = 0
      let avg = 0

      for (pos in values) {
        if (values[pos] > big) {
          big = values[pos]
        }
        if (values[pos] < small) {
          small = values[pos]
        }
        sum += values[pos]
        avg = sum / values.length
      }

      res.innerHTML = ''
      res.innerHTML += `<p>We have ${total} elements in total</p>`
      res.innerHTML += `<p>The biggest values is ${big}</p>`
      res.innerHTML += `<p>The smallest value is ${small}</p>`
      res.innerHTML += `<p>The result of the sum is ${sum}</p>`
      res.innerHTML += `<p>The average is ${avg.toFixed(2)}</p>`
    }
}

const clearBtn = document.querySelector('.btn-clear')

clearBtn.addEventListener("click", clear); 

function clear() {
  const options = document.getElementById("txtlist")
  const res = document.getElementById("res")
  res.innerHTML = ''
  options.innerHTML = ''
  values = []
}
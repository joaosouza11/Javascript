let num = [5, 8, 2, 9, 4]

console.log(`Our vector it's ${num}`)

num[5] = 6
num.push(7)
console.log(`Now our vector it's ${num}`)

num.sort()
console.log(`In ascending order it's ${num}`)

for (c in num) {
  console.log(num[c])
}

console.log(`The number 8 it's on position ${num.indexOf(8)}`)
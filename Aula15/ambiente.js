let num = [5, 8, 2, 9, 4]

console.log(`Nosso vetor é o ${num}`)

num[5] = 6
num.push(7)
console.log(`Nosso vetor agora é o ${num}`)

num.sort()
console.log(`Na ordem crescente fica ${num}`)

for (c in num) {
  console.log(num[c])
}

console.log(`O 8 está na posição ${num.indexOf(8)}`)
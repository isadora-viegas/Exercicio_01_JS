alert("Olá! Agora vamos fazer algumas operações matemáticas, vamos lá?")

let firstNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Digite o segundo número: ")

if (firstNumber === secondNumber) {
  alert("Os dois números inseridos são iguais")
} else {
  alert("Os dois números inseridos não são iguais")
}

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber + secondNumber)
const sub = (firstNumber - secondNumber)
const mult = (firstNumber * secondNumber)
const div = (firstNumber / secondNumber)
const rest = (firstNumber % secondNumber)

alert("Soma: " + sum)
if (sum % 2 === 0) {
  alert("Este número é par.")
} else {
  alert("Este número é ímpar.")
}



alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)
alert("Resto: " + rest)






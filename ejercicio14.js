/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
Puedes usar este array para probar tu función:
*/
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  for (let i = 0; i < list.lenght; i++) {
    let list = array.reduce(word, acumulador)
    let word = words[i]
    let acumulador = word
    return list
  }
}
console.log(repeatCounter(words))

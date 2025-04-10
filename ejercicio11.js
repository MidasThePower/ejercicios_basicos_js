/*
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función:
*/
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  for (let i = 0; i < list.lenght; i++) {
    if (list == Number) {
      number = list[i]
      return number++
    } else {
      for (let j = 0; j < list.lenght; j++) {
        word = list[j]
        return word++
      }
    }
  }
}
console.log(averageWord(mixedElements))

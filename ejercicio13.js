/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:
*/
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList) {
  for (let i = 0; i < nameList.lenght; i++) {
    let nam = nameList[i]
    if (nam === names[i]) {
      return true + console.log(names[i])
    } else {
      return false
    }
  }
}
console.log(nameFinder(names))

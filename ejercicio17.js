/*
For...in: Usa un for...in para imprimir por consola los datos del alienígena.
Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"
Puedes usar este objeto:
*/
const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}

/*const aliens =
  Object.keys(alien)

for (let i = 0; i < aliens.length; i++) {
  let xeno = aliens[i]
  console.log(xeno)
}*/

for (const xeno in alien) {
  console.log('La propiedad ' + xeno + ' tiene como valor ' + alien[xeno])
}

// 6.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

let num = 9

for (i = 0; i <= num; i++) {
  console.log(i)
}

// 6.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (i = 0; i <= num; i++) {
  if (num % 2 == 0) {
    console.log(i)
  }
}

/* 6.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'.*/

for (i = 1; i <= 10; i++) {
  if (i != 10) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('¡Dormido!')
  }
}

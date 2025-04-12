/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.
*/
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const noVegan = []

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let fruit = 0

const newFoodSchedule = foodSchedule.map((food) => {
  if (food.isVegan) {
    return food
  } else {
    const fruit = fruits[fruit]
    fruit++
    return { name: fruit, isVegan: true }
  }
})
console.log(newFoodSchedule)

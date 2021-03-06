// 1. Imprimir todos los números naturales del uno al cien múltiplos de 5 como 'Fizz',
//  múltiplos de 3 como 'Buzz' y múltiplos tanto de 3 como de 5 como 'FizzBuzz'

function FizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} Fizzbuzz`);
    } else if (i % 3 === 0)
      console.log(`${i} buzz`);
    else if (i % 5 === 0)
      console.log(`${i} Fizz`);
    else
      console.log(i)
  }

}
//   for (let i = 1; i <= 100; i++) {
//     console.log(i%5===0 ? i%3===0 ? i + 'FizzBuzz' : i + 'Fizz' : i%3===0 ? i + 'Buzz' : i + '')
// }




//2. Obtener de un arreglo el string con mayor número de caracteres

const charList = ["Hola", "hola123", "123"]
const animals = ["Ardilla", "Búho", "Avestruz", 'Krakatoa300']


const getMaxLengthString = (array) => {
  let maxLengthString = ""
  for (let index = 0; index < array.length; index++) {
    let currentString = array[index]
    if (currentString.length > maxLengthString.length) {
        maxLengthString = currentString
    }
  }
  return maxLengthString
}
  
  
//3. Crear una lista de calificaciones del 0 al 10, y obtener el promedio
const claseA = [6, 7, 8, 3, 10, 10, 7, 6, 7]
const claseB = [5, 7, 5, 8, 9, 10, 7, 9, 10]
const claseC = [8, 9, 9 ,9 , 9, 10, 10, 10, 10, 10]

const mean = (list) => {
  let sum = 0
  for (let i = 0; i < list.length; i++) {
    sum += list[i]
  }
  return (sum / list.length).toFixed(2)
}

  
//4. con la misma lista obtener la mediana
  // - Ordenar la lista
  //- Validar si la cantidad de calficaciones es par o impar
  // - Tomar el valor de en medio
const calif = [6,4,7,1,2,4,8,10,5,8,9] //Impar
const califdos = [1,2,3,4,6,5,6] //Par
const median = (list) => {
    let value = 0;
    let listSort = list.sort((a, b) => a - b)
  if (listSort.length % 2 !== 0) {
      value = listSort[Math.trunc(listSort.length / 2)]
    } else {
      const num1 = listSort[(listSort.length / 2)]
      const num2 = listSort[(listSort.length / 2) + 1]
      
      value = mean([num1, num2])
    }
    return value
}

//5. Con la misma lista, obtener la moda





/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

// function truncate(, maxLength) {
//   if (str > maxLength){
//     return str.slice(0,maxLength) + '...'
//   }
//   return str
// }

console.log(truncate("Вот, что мне действительно нравится в этом", 20));

function separateTypes(input) {
  const resultObj = {
    string: [],
    number: [],
    boolean: []
  }
  for (let i = 0; i < input.length; i++){
    if(typeof input[i] === 'string'){
      resultObj.string.push(input[i])
    } else if (typeof input[i] === 'number'){
      resultObj.number.push(input[i])
    } else if (typeof input[i] === 'boolean'){
      resultObj.boolean.push(input[i])
    }
  }
  return resultObj
}

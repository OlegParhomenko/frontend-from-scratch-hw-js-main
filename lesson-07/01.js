/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// решается с помощью charAt и slice


function capitalizeWords(str) {
  let result = ''; // Изначально пустая строка для результата

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
      // Если это первый символ строки или символ после пробела
      result += str[i].toUpperCase(); // Добавляем заглавную букву в результат
    } else {
      result += str[i]; // Иначе просто добавляем символ как есть
    }
  }

  return result;
}

// Пример использования
console.log(capitalizeWords("hello world from javascript")); // "Hello World From JavaScript"


function capitalizeWords(str) {
    const newStr = ''
    for (let i = 0; i < str.length; i++){
      if (str[i] === 0 || str[i-1] === ' '){
        newStr += str[i].toUpperCase()
    } else {
        newStr += str[i].toLowerCase()
    }
  }
    return newStr
}

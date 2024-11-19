/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  return  str.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
}

console.log(capitalizeWords('hello world from javascript'));


// function capitalizeWords(str) {
//   let result = '';
//   let word = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ' || i === str.length - 1) {
//       if (i === str.length - 1) 
//         word += str[i]
//       }
//       result += word.charAt(0).toUpperCase() + word.slice(1) + ''
//       word = '';
//     } else {
//       word += str[i]
//     }
//     return result.trim();
//   }


/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и
// добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

function truncate(str, maxLength) {
  return (str.length > maxLength) ? str.slice (0, maxLength - 1) + "..." : str
}
console.log(truncate("Вот, что мне действительно нравится в этом", 20)); // Ожидаемый результат: "Вот, что мне де..."
console.log(truncate("Короткая строка", 20)); // Ожидаемый результат: "Короткая строка"
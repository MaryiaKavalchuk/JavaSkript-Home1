/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, 
где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
// 'Hello'
// первая итерация цикла index = 0, result = 'hh'
// втоорая итерация цикла index = 1, result = 'hhee'
// 3 итерация цикла index = 2, result = 'hheell'
// 4 итерация цикла index = 3, result = 'hheellll'
// 5 итерация цикла index = 4, result = 'hheelllloo'
// index = 5 = str.length (он не меньше, значит цикл завершается)

function doubleEachCharacter(str) {
    let result = ""
    for (let index = 0; index < str.length; index++) {
            result = result + str[index] + str[index]
        }
        return result
    }

doubleEachCharacter('hello')
console.log(doubleEachCharacter('hello'));

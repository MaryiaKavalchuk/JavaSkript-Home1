/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {
    for (let index = 0; index < array.length; index++) { 
        if (array[index] === element) {
            return true
        } 
    }
    return false
}

includesElement([1, 2, 3], 2) 
// includesElement([1, 4, 3], 2) 

console.log(includesElement([1, 2, 3], 2));
// console.log(includesElement([1, 4, 3], 2));



// элемент в массиве - [23, 45, 56]
// индекс - 0,1,2,
// длина массива - [____________]

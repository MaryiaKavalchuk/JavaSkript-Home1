/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, 
содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. 
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// array1 = [Зомби, Ангелы, Киски, Драконы]
// array1[3] = Драконы
// array2 = [Ангелы, Киски, фурии]
// array2[0] = Ангелы
// первая итерация цикла index = 0, result = []
// втоорая итерация цикла index = 1, result = [Ангелы]
// 3 итерация цикла index = 2, result = [Ангелы,Киски]
// 4 итерация цикла index = 3, result = [Ангелы,Киски]
// index = 4 = array1.length (он не меньше, значит цикл завершается)

// function findCommonElements(array1,array2) {
//     const result = []
//     for (let index = 0; index < array1.length; index++) {
//         if (array2.includes(array1[index])) {
//             result.push(array1[index])
//         }
        
//     }
// }


// console.log(findCommonElements([1, 2, 3], [2, 3, 4]) );


function findCommonElements(array1,array2) {
    return array1.filter((element)=>array2.includes(element))

}


console.log(findCommonElements([1, 2, 3], [4, 5, 6]) );



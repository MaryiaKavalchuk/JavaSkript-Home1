// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    return Math.max(number1, number2, number3)
}
console.log(findLargest(2,5,8));

// function findLargest(number1, number2, number3) {
//     let max = -Infinity // самое минимальное значение, самое большое - infinity
//     if (number1>max) {
//         max = number1
//     }
//     if (number2>max) {
//         max = number2
//     }
//     if (number3>max) {
//         max = number3
//     }
//     return max
// }

//Цикл
// function test(string) {
//     for (let i = 1; i <= 50; i++) {
//         console.log(string+i) 
//         console.log(i) 
        
//     }
// }
// console.log(test('name'));

// //Цикл
// function test2(number) {
//     for (let i = 1; i <= 100; i++){
//         console.log(number * i);
//     }
// }
// console.log(test2(17));

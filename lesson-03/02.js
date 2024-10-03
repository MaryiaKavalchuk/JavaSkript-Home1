// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае




function isEven(number) {
    if ( number % 2 === 0) {
        return true
    }else {
        return false
    }
    
}
console.log(isEven(10));
console.log(isEven(11));


// return number % 2 === 0

// function isEven(number) {
//     return number % 2 === 0 ? true : false // ? true - если верно то это; : false - если не верно примени это
//  }

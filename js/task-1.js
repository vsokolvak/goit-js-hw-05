"use strict"

function isEnoughCapacity( products, containerSize ) {

    // products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
    // containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

    // Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.

    if ( typeof products !== 'object' || typeof containerSize !== 'number') return 'incorect data' 
    
    let productsCountn = 0

    for (const key in products) {
        productsCountn += products[key]
    }

    if (productsCountn <= containerSize) return true
    else return false

}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

console.log(
  isEnoughCapacity("8", 7)
); // 'incorect data'
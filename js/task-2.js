"use strict"

function calcAverageCalories(days) {

    // повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. 

    // Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. 

    // перевіряю, чи прийшов масив
    if ( !Array.isArray(days) ) return 'incorect data'

    // за умовою, при пустому масиві тре повернути 0
    if ( days.length === 0 ) return 0

    let caloriesCountn = 0

    for (const item of days) {

        // перевіряю, чи кожен елемент масиву об'єкт, та чи калорії число
        // інакше повернеться андефайнед, і буду шукати помилку в коді
        if ( typeof item !== 'object' ) return 'incorect data'
        if ( typeof item.calories !== 'number' ) return 'incorect data'
        caloriesCountn += item.calories
    }

    return caloriesCountn / days.length

}

console.log('--------------------')
console.log('------ 2 TASK ------')
console.log('--------------------')
 
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0

console.log(
  calcAverageCalories({ day: "sunday", calories: 2610 })
); // 'incorect data'
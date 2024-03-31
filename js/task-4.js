"use strict"

const getTotalBalanceByGender = (users, gender) => {
    // users — масив об’єктів користувачів,
    //  gender — рядок, що зберігає стать.
    // Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender

    if (!Array.isArray(users) || typeof gender !== 'string') return 'incorect data'

    let totalBalanceToGender = 0 

    users.filter( el => el.gender === gender).map( el => totalBalanceToGender += el.balance || 0)
    // якщо поле баланс відсутнє, то додасть 0, інакше буде NaN

    return totalBalanceToGender

}

console.log('--------------------')
console.log('------ 4 TASK ------')
console.log('--------------------')

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
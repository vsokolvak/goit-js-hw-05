"use strict"

    const profile = {
        username: "Jacob",
        
        playTime: 300,
        
        changeUsername(newName) {
            this.username = newName
        },

        updatePlayTime(hours) {
            this.playTime += hours
        },

        getInfo(newName) {
            return `${this.username} has ${this.playTime} active hours!`
        }
    };

    // Доповни об’єкт profile методами для роботи з його властивостями.

    // Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
    // Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
    // Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.

console.log('--------------------')
console.log('------ 3 TASK ------')
console.log('--------------------')

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
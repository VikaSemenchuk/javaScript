/* напиши скрипт який перевірить чи входить число у відрізок х1 і х2 */
// ввести змінні х1 і х2
// ввемсти змінну number
// порівняти змінну з х1 і х2 за допомогою оператора && і вивести у консоль
const x1 = 10;
const x2 = 50;
let number = 30;
let res = number >= x1 && number <= x2;
console.log(`число ${number} попадає у відрізок від ${x1} до ${x2}`, res);

number = 20;
res = number >= x1 && number <= x2;
console.log(`число ${number} попадає у відрізок від ${x1} до ${x2}`, res);

number = 60;
res = number >= x1 && number <= x2;
console.log(`число ${number} попадає у відрізок від ${x1} до ${x2}`, res);

number = 5;
res = number >= x1 && number <= x2;
console.log(`число ${number} попадає у відрізок від ${x1} до ${x2}`, res);


number = 30;
let res2 = number < x1 || number > x2;
console.log(`число ${number} не попадає у відрізок від ${x1} до ${x2}`, res2);

number = 70;
res2 = number < x1 || number > x2;
console.log(`число ${number} не попадає у відрізок від ${x1} до ${x2}`, res2);

number = 6;
res2 = number < x1 || number > x2;
console.log(`число ${number} не попадає у відрізок від ${x1} до ${x2}`, res2);

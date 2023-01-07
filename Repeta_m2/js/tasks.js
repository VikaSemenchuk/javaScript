/*
порахувати загальну суму покупок в корзині
*/
const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
for (const value of cart) {
  console.log(value);
  total += value;
}
console.log(`Загальна сума: `, total);

let totalFor = 0;
for (let i = 0; i < cart.length; i += 1) {
  console.log(cart[i]);
  totalFor += cart[i];
}
console.log(`Загальна сума: `, totalFor);
console.log(` `);
console.log(` `);

/*
    напиши скрипт який підраховую суму парних чисел в масиві

    1. ввести змінну totalOdd
    2. перебрати масив. елементи змінювати не треба, значить використовуємо цикл for of
    3. ввести умову для порівняння
    4. провести перевірку, при виконанні умови - += до totalOdd
    */

const numbers = [1, 5, 8, 12, 4, 15, 27, 30, 18, 11];
let totalEven = 0;

for (const number of numbers) {
  console.log(number);

  if (number % 2 === 0) {
    totalEven += number;
  }
}

console.log(`Загальна сума парних чисел =`, totalEven);
console.log(` `);

// АБО

let totalNotOdd = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log(`Не парне число, пропустити ітерацію`, number);
    continue;
  } else {
    totalNotOdd += number;
    console.log(`Парне число, додаємо`, `+`, number, `=`, totalNotOdd);
  }
}

console.table(`Загальна сума парних чисел =`, totalNotOdd);
console.log(` `);
console.log(` `);

/*
напиши скрипт пошуку логіна
 */

const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message2 = `Користувача ${loginToFind} не знайдено`;

//  for:
let message;
for (let i = 0; i < logins.length; i += 1) {
  if (logins[i] !== loginToFind) {
    message = `Користувача ${loginToFind} не знайдено`;
    continue;
  }
  message = `Користувача ${loginToFind} знайдено`;
  break;
}
console.log(message);
console.log(` `);

// for of:

let message1;
for (const login of logins) {
  if (login !== loginToFind) {
    message1 = `Користувача ${loginToFind} не знайдено`;
    continue;
  }
  message1 = `Користувача ${loginToFind} знайдено`;
  break;
}
console.log(message1);
console.log(` `);

// break:

for (const login of logins) {
  console.log(`Перевіряємо ${loginToFind} з ${login}`);
  if (login === loginToFind) {
    message2 = `Користувача ${loginToFind} знайдено`;
    break;
  }
}
console.log(message2);
console.log(` `);

// ternary operator and includes:
logins.includes(loginToFind)
  ? console.log(`Користувача ${loginToFind} знайдено`)
  : console.log(`Користувача ${loginToFind} не знайдено`);
console.log(` `);

console.log(logins.includes(loginToFind));
console.log(` `);

let message3 = logins.includes(loginToFind)
  ? `Користувача ${loginToFind} знайдено`
  : `Користувача ${loginToFind} не знайдено`;
console.log(message3);
console.log(` `);
console.log(` `);

/*
знайти найменше число в масиві, числа унікальні (не повторюються)
 */

const numbers2 = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber;

/*
!!!!!!!!Чому тут не працює порівняння:
for (const number of numbers2) {
    smallestNumber = number;
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

бо я на самому початку присвоїла всередині циклу змінній smallestNumber значення number,
тому на кожному витку циклу smallestNumber буде дорівнювати значенню number цього витка
*/
smallestNumber = numbers2[0]; /*!!!!!! */
for (const number of numbers2) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log(`Найменше число масиву:`, smallestNumber);
console.log(` `);
console.log(` `);

/*

*/
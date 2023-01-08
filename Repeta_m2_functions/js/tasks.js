/*
Написати функцію calculateTotalPrice(items)
яка приймає масив цін (чисел) і повертає їх суму
*/
const calculateTotalPrice1 = function (items) {
  const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
  let total = 0;
  for (const value of cart) {
    total += value;
  }
  return total;
};
console.log(`Total:`, calculateTotalPrice1());

/*
при написанні функції параметр пишеться як змінна, в цьому випадку Items
при виклиці функції ми в дужках пишемо АРГУМЕНТИ, в нашому випадку масив чисел cart
*/

const calculateTotalPrice = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};

console.log(`Total з items:`, calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));
console.log(`Total з items:`, calculateTotalPrice([54, 28, 12, 25, 90]));
console.log(`Total з items:`, calculateTotalPrice([12, 25, 90]));

console.log('');

/*
напиши функцію logItems(items) для перебора і логування масиву
*/
// не завжди функції повинні щось повертати, як наприклад у даній задачі
const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems([34, 67, 98]);
logItems(['mango', 'poly', 'ajax']);
console.log('');

/*
напиши функцію findLogin(allLogins, login) для пошуку логіна
- якщо логін не знайдено - вивести повідомлення `Користувача ${} не знайдено`
- якщо є - `Користувача ${}  знайдено`
*/
const logins = ['kjsdgk', 'kshrgh', 'agfhae'];
const findLogin = function (allLogins, login) {
  return allLogins.includes(login)
    ? `Користувача ${login} знайдено`
    : `Користувача ${login} не знайдено`;
};

console.log(findLogin(logins, 'agfhae'));
console.log(findLogin(['kjsdgk', 'kshrgh', 'agfhae'], 'agfhrtgae'));
console.log('');

// тут ми як аргумент передали масивБ який знаходиться ззовні
// але всередині функції не бажано використовувати ззовнішні змінні чи дані

/*
напиши функцію findSmallestNumber(numbers)
*/
const numbers1 = [15, 54, 32, 4, 16, 56];
const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

console.log(`Найменше число:`, findSmallestNumber(numbers1));
console.log(`Найменше число:`, findSmallestNumber([56, 23, 78, 12, 19, 22]));
console.log('');

/*
напиши функцію changeCase(string)Б яка буде міняти регістр кожного символа на протилежний
*/
const changeCase = function (string) {
  let changedString = '';

  for (const symbol of string) {
    // if (symbol === symbol.toLowerCase()) {
    //     changedString += symbol.toUpperCase();
    // } else {
    //     changedString += symbol.toLowerCase();
    // }

    symbol === symbol.toLowerCase()
      ? (changedString += symbol.toUpperCase())
      : (changedString += symbol.toLowerCase());
  }

  return changedString;
};
console.log(changeCase('JavaScript'));
console.log(changeCase('uuhfffddehkKLmhgFFF'));
console.log('');

/*
напиши функцію slugify(string) яка отримує рядок і повертає URL-slug
*/
const title = 'Top 10 benefits of React frameworks';
const slugify = function (string) {
     return string.toLowerCase().split(' ').join('-');
}
console.log(slugify('JavaScript is awesome'));
console.log(slugify(title));



// const slug = title.toLowerCase().split(' ').join('-')
// console.log(slug)
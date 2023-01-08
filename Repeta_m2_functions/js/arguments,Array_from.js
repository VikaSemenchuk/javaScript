/*
псевдомасив вбудований у функцію на випадок якщо ми не знаємо кількість аргуентів, 
які будемо передавати. 
Псевдомасив має малий функціонал, тому його потрібно перетворювати у нормальний (рядок 8)
 */
const fn = function () {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
};
fn(1, 5, 7);
fn(54, 76, 12, 9, 54, 23);
fn(23, 1);
console.log('');

/*
 СУЧАСНІШИЙ СПОСІБ: (рядок 20) - збирає всі аргументи у масив для цієї функції
 '...' - називається rest
 */

const fnNew = function (...argsNew) {
  console.log(argsNew);
};
fnNew(1, 5, 7);
fnNew(54, 76, 12, 9, 54, 23);
fnNew(23, 1);
console.log('');

/*
 якщо не всі аргументи повинні бути в масиві, то перед rest можна дописати 
 довільну кількість змінних, потім rest, після нього все що залишиться запишеться в масив
 */

const fnNewDifferent = function (a, b, ...argsNew) {
  console.log(a, b);
  console.log(argsNew);
};
fnNewDifferent('hi', 1, 5, 7);
fnNewDifferent('hello', 54, 76, 12, 9, 54, 23);
fnNewDifferent('Guten Tag', 23, 1);
console.log('');

/*
 написати функцію add для додавання будь-якої кількості аргументів
 */

const add = function (...args) {
  console.log(args);

  let total = 0;

  for (const number of args) {
    total += number;
  }

  return total;
};

console.log('Сума:', add(1, 5, 8, 4, 0, 2, 6, 8));
console.log('Сума:', add(1, 5, 8, 4, 100));
console.log('');

/*
 напиши функцію filterNumbers(array [, number1, ...]), яка:
 -першим аргументом приймає масив чисел
 -після першого аргументу може бути будь-яка кількість інших аргументів, які будуть числами
 -функція повинна повернути новий масив, в якому будуть тільки ті аргументи, які посинаються з другого,
 для якого є аналог в оригінальному масиві
 */

const filterNumbers = function (array, ...args) {
  // console.log(args)
  // console.log(array)
  const filtredArray = [];

  for (const arg of args) {

    if (array.includes(arg)) {
      filtredArray.push(arg);
    }
    
  }

  return filtredArray;
};

console.log(filterNumbers([4, 2, 7, 4], 6, 2, 4, 7));
console.log(filterNumbers([3, 9, 8, 1], 9, 4, 1, 0));

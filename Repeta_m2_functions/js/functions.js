const a = 4;
const b = 3;
let total = 0;
const add = function () {
  // total = a + b;
  console.log(total);

  console.log('Виконується функція');
};
console.log(total);

console.log(add);
add();
add();
add();
add();
add();

console.log('');

console.log(total);
/*
  - функції можна оголошувати у змінних
  - оголошена функція сама по собі не робить нічого (рядок 2)
  - виклик функції : назва функції() (рядок 5)
  - console.log(total) у 6 рядку повертає 0, тому що функція написана,
але ще не викликана
  - console.log(total) у 17 рядку вже показує результат виконання коду у функції
так як її вже було викликано у рядку 13
*/

const add1 = function (c, d) {
  console.log(c);
  console.log(d);

  const total1 = c * d;
  console.log('Сума:', total1);
};
console.log('');

add1(4, 7);
console.log('');

add1(15, 67);
console.log('');

add1(19, 45);
console.log('');
/*
  У дужках () передаються параметри. при кожному новому виклику
однієї і тієї ж функції параметри (це вже аргументи) можна записувати різні, вони доступні лише
всередині конкретно викликаної функції
*/

const add2 = function (x, y) {
    console.log('Сума:', x + y)
  return x + y;
};
console.log('');

add2(4, 6);
console.log('');

console.log('Результат, повернутий функцією add2 через return:', add2(15, 6));
console.log('');
/*
return - результат функції, якщо його не вказати - повертається undefined
якщо return вказати на початку тіла функції, все що після нього ніколи не виконається (рядок 74)

*/
const add3 = function (x, y) {
    console.log('Сума:', x + y)
};
console.log(add3(2, 4));
console.log('');

/* switch використовується лише у випадках, коли
потрібно порівняти зміну на строгу рівність з якимись іншими
 значеннями
 
 break використовується для того, щоб зупинити виконання
 інструкції розгалуження якщо умова виконана*/

// напиши скрипт вибору готелю по кількості зірок
// 1-20$, 2-30$, 3-50$, 4-70$, 5-120$

// якщо у змінній stars якесь інше значення крім чисел 1-5 - вивести в
// консоль рядок `Такої кількості зірок нема`

const stars = 5;
let price;

if (stars === 1) {
  console.log((price = 20));
} else if (stars === 2) {
  console.log((price = 30));
} else if (stars === 3) {
  console.log((price = 50));
} else if (stars === 4) {
  console.log((price = 70));
} else if (stars === 5) {
  console.log((price = 120));
} else {
  console.log(`Такої кількості зірок нема`);
}

// АБО
switch (stars) {
  case 1:
    console.log((price = 20));
    break;

  case 2:
    console.log((price = 30));
    break;

  case 3:
    console.log((price = 50));
    break;

  case 4:
    console.log((price = 70));
    break;

  case 5:
    console.log((price = 120));
    break;

  default:
    console.log(`Такої кількості зірок нема`);
}

//  напиши скрипт вибору готелю:
// 1,2 зірки - 20, 3,4 - 30, 5 - 120

const stars1 = 8;
let price1;

if (stars1 === 1 || stars1 === 2) {
  price1 = 20;
} else if (stars1 === 3 || stars1 === 4) {
  price1 = 30;
} else if (stars1 === 5) {
  price1 = 120;
} else {
  console.log(`Такої кількості зірок нема`);
}
console.log(price1);

// АБО

switch (stars1) {
  case 1:
  case 2:
    price1 = 20;
    break;

  case 3:
  case 4:
    price = 30;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log(`Такої кількості зірок нема`);
}
console.log(price1);

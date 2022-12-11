/*написати скрипт підрахунку суми покупки зі знижкою в залежності від потраченої суми за ввесь період
-загальна потрачена сума у змінній totalSpent
-сума поточного платежу у змінній payment
-скидка у змінній discount
-сума зі знижкою у змінній discountPayment

-якщо потрачено від 100 до 1000 - бронзовий партнер, скидка 2%
-якщо від 1000 до 5000 - срібний партнер, скидка 5%
-якщо більше 5000 - золотий партнер, скидка 10%
-якщо потрачено менше 100 - не партнер, скидка 0%

-в резкльтаті вивести повідомлення 
"Оформляємо замовлення на суму () кредитів зі знижкою (). Сума до сплати - () кредитів. Дякуємо за замовлення"*/

const totalSpent = 40;
const payment = 500;
let discount;
let discountPayment;
let message;

if(totalSpent >= 5000) {
    discount = 0.1;
    discountPayment = payment - (payment * discount);
message = `Оформляємо замовлення на суму ${payment} кредитів зі знижкою 10%. Сума до сплати - ${discountPayment} кредитів. Дякуємо за замовлення`
console.log(message);
} else if(totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    discountPayment = payment - (payment * discount);
    message = `Оформляємо замовлення на суму ${payment} кредитів зі знижкою 5%. Сума до сплати - ${discountPayment} кредитів. Дякуємо за замовлення`
    console.log(message);
} else if(totalSpent >= 100) {
    discount = 0.02;
    discountPayment = payment - (payment * discount);
    message = `Оформляємо замовлення на суму ${payment} кредитів зі знижкою 2%. Сума до сплати - ${discountPayment} кредитів. Дякуємо за замовлення`
    console.log(message);
} else {
console.log(`Оформляємо замовлення на суму ${payment} кредитів. Дякуємо за замовлення`)
}
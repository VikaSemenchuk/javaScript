/* 
1. напиши скрипт який підраховує загальну суму зп працівників
кількість працівників зберіг у зм employees
зп кожного працівника - це випадкове число від 500 до 5000
записати суму у змінну totalSalary


-оголосити змінні employees, totalSalary
-перебрати працівників в циклі
-сгенерувати рандомну зп 
-додати її в тотал
лог
*/
 const employees = 4;
 let totalSalary = 0;
 const minSalary = 500;
 const maxSalary = 5000;

 for (let i = 1; i <= employees; i += 1) {
    const Salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary);
        totalSalary += Salary;
    console.log(`ЗП працівника №${i} = ${Salary}`, totalSalary)
 }
 console.log(totalSalary)

/*
2. напиши скрипт, який підраховує суму всіх парних чисел
які входять у діапазон чисел від min до max

- визначити діапазон
- визначити парні числа 
- ввести зміну totalNumber
- перебрати числа 
- перевірити чи число парне
*/

const minNumber = 5;
const maxNumber = 10;
let totalNumber = 0;

for (let i = minNumber; i <= maxNumber; i += 1) {
    // console.log(i)
    if (i % 2 === 0) {
    console.log(`парне: `, i)

        totalNumber += i;
    }
    console.log(i, totalNumber)
}
console.log(`total:`, totalNumber)

// АБО

let total = 0
for (let i = minNumber; i <= maxNumber; i += 1) {
    // console.log(i)
    if (i % 2 !== 0) {
        console.log(`не парне`, i)
       continue;
    }
    total += i;
    console.log(`парне`, i, total)

}
console.log(`total:`, total)
//  такий варіант кращий, логіка від протилежного, ми спочаткку 
// перевіряємо найгірший варіант, з допомогою continue пропускаємо його 
// і далі виконується потрібна умова


// напиши скрипт опрацювання покупки в магазині
/* баланс користувача зберігається у зм balance
сума покупки зберігається у зм payment

перед перевіркою вивести повідомлення 
`Загальна вартість покупки ${} кредитів. Перевіряємо кількість доступних коштів`

якщо сума більша за баланс:
`На рахунку недостатньо коштів для проведення операції`
якщо сума не перевищує баланс:
відмінусувати суму з балансу і вивести повідомлення
`На рахунку залишилось ${} кредитів`

в кінці вивести повідомленя 
`Операція завершена`

1. ввести змінні
вивести лог перед перевіркою
2. порівняти суму з баласом і вивести відповідний лог
3. відняти суму з балансу
вивести лог із завершенням 
*/

let balance = 500;
const payment = 400;

console.log(`Загальна вартість покупки ${payment} кредитів. Перевіряємо кількість доступних коштів`)
if (payment > balance) {
console.log(`На рахунку недостатньо коштів для проведення операції`)
} else {
// const newBalance = balance - payment;
// console.log(`На рахунку залишилось ${newBalance} кредитів`);

balance -= payment;
console.log(`На рахунку залишилось ${balance} кредитів`);

}
console.log(`Операція завершена`);

/* 
скрипт для підрахунку суми покупки зі змижкою в залежності відмпотраченої суми за ввесь 
час (партнерська програма)

загальна сума зберігається у зм totalSpent
сума поточного платежу - payment
знижка - discount

від 100 до 1000 - 2%
1000-5000 - 5%
5000 - 10%
менше 100 - 0%

в результаті вивести повідомлення
`Оформляємо замовлення на суму ${} зі знижкою ${}`

1. визначити знижку і присвоїти відповідній змінній
2. відняти відповідну знижку від суми покупки
*/

let totalSpent = 20000;
let payment1 = 50;
let discount = 0;

if (totalSpent >= 5000) {
    discount = 0.1;
    console.log(`Золотий партнер, знижка 10%`)
} else if (totalSpent < 5000 && totalSpent >= 1000) {
    discount = 0.05;
    console.log(`Срібний партнер, знижка 5%`)
} else if (totalSpent < 1000 && totalSpent >= 100) {
    discount = 0.02;
    console.log(`Бронзовий партнер, знижка 2%`)
} else {
    console.log(`Не партнер, знижка 0%`)
}
payment1 = payment1 - (payment1 * discount);
console.log(`Оформляємо замовлення на суму ${payment1} зі знижкою ${discount * 100}%`)

totalSpent += payment1
/* написати скрипт, який просить користувача ввести число і степінь
/* приводить число в цю степінь і повертає результат в консоль

/* 1. попросити ввести число і зберегти у змінну
/* 2. попросити ввести степінь і зберегти у змінну
/* 3. перевести знвчення змінних до числа
/* 4. привести число в степінь, результат вивести у консоль скороченим варіантом*/

let base = prompt('add number');
let power = prompt('add power');

base = Number(base);
console.log(base);

power = Number(power);
console.log(power);

console.log(base ** power);

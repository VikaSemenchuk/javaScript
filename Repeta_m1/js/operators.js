/* знаки <>+- і т.д. називаються оператори
числа,які порівнюються - операнди
операнди завжди приводяться до числа*/
 console.log(10 > 5);
 console.log('10' > 5);
// рядок "10" привівся до числа 10
console.log(true > 5);
// true у числовому виразі дорівнює 1

const isEquel = '5' == 5;
console.log(isEquel);
// == - не строга рівність, не звертає увагу на числа і строки

const isEquel1 = '5' === 5;
console.log(isEquel1);
// === - строга рівність, використовуємо завжди, рядок і буль не приводиться до числа

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
// тільки ці 6 значень приводяться до false у бульовому перетворенні
// все решта завжди буде true
console.log(Boolean(5));
console.log(Boolean('vika'));
console.log(Boolean('0'));
console.log(Boolean('false'));/*бо це рядок, не пустий*/

// при && мають виконуватися всі умови
console.log(5 && 6 && 7 && 'hi'); /* && порівнює з права на ліво, видає останнє  true*/
console.log(5 && 0 && 3); /* запинається об перше false і видає його*/

// при || має виконуватись лише одна умова, повертає перше значення true, запинається на правді
// якщо нема true - останнє false
console.log(2 || 3 || 0 || 5); /* далі першого правдивого 2 навіть не перевіряє*/ 
console.log(0 || 2 || 5); /*перше true після false*/
console.log(0 || null || '' || NaN); /* порертає останнє false */

// ! те що справа приводить до буля і робить інверсію (перевертає значення на протилежне)
console.log(!true); /* ! буквално означає НЕ*/
console.log(!0);
console.log(!'');
console.log(!5); /*true значення 5 ! перевернув на протилежне false*/





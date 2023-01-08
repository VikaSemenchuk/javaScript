/*
slice - повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його
- slice(begin-індекс першого ел,
    end-індекс останнього ел). Копія створюється з begin і до, але не включно end - 
    індекси елементів вихідного масиву. Аргумент end є не обов'язковим
 */

/*
join - це метод масиву, який об'єднує елементи масиву в один рядок,
елементи в рядку розділяються символом в дужках (delimiter)
 */
/*
написати скрипт, який об'єднує всі елементи масиву в один рядок,
елементи в рядку мають бути розділені комами
 */

const friends = ['mango', 'poly', 'kiwi', 'ajax'];
let string = '';

for (const friend of friends) {
string += friend + ', ';
}
console.log(string);
string = string.slice(0, string.length - 1);
console.log(string);
console.log(` `);

const stringJoin = friends.join(', ');
console.log(stringJoin);


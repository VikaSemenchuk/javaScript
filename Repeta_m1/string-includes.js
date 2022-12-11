const blacklisteWorld1 = 'спам';
const blacklisteWorld2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі міліон';
const string2 = 'найбільший РОЗПРОДАЖ цього тижня, не пропусти!';
const string3 = 'Рекламна компанія #fatlivemaster';

console.log(string1.includes(blacklisteWorld1));
console.log(string1.includes(blacklisteWorld2));

console.log(string2.includes(blacklisteWorld1));
// не бачить слово розпродаж через регістр
console.log(string2.includes(blacklisteWorld2));
// тому приводимо повідомлення, яке перевіряємо до одного регістру
console.log(string2.toLowerCase().includes(blacklisteWorld2));

console.log(string3.includes(blacklisteWorld1));
console.log(string3.includes(blacklisteWorld2));

/*
split - перетворює рядок в масив, split('роздільник')
- якщо роздільник - пустий рядок '' - створиться масив окремих символів 
- якщо роздільник - пробіл ' ' - створиться масив слів
*/
const a = '247564 7608670948 84768379857';
const b = a.split(' ');
const c = a.split('');
const d = a.split();

console.log(typeof a, a);
console.log(b);
console.log(c);
console.log(d);

/*
написати скрипт, який переведе літери рядка 'JavaScript' до протилежного регістру
*/
const stringMain = 'JavaScript';
let invertedString = '';
const array = stringMain.split('');
console.log(array);

for (const letter of array) {
  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {invertedString += letter.toLowerCase();}


//   invertedString += letter === letter.toLowerCase() 
//   ? letter.toUpperCase() 
//   : letter.toLowerCase();

const isEqual = letter === letter.toLowerCase();
invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(invertedString);

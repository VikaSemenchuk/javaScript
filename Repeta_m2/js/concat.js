/*
concat - зшиває довільну кількість масивів у один
*/

const array1 = [5, 8, 23, 90];
const array2 = [6, 12, 98];
let total1 = 0;

for (let i = 0; i < array1.length; i += 1) {
    total1 += array1[i];
}

for (let i = 0; i < array2.length; i += 1) {
    total1 += array2[i];
}

console.log(total1);

// АБО:

let total = 0;
const numbers = array1.concat(array2);
console.log(numbers);
for (const number of numbers) {
    total += number;
}
console.log(total);
console.log(array1)
// генерує рандомне число
console.log(Math.random());

// щоб ств рандом у певних межах:
const max = 50;
const min = 3;
console.log(Number.parseInt(Math.random() * (max - min) + min));

// але краще заокруглювати за допомогою методу round:
console.log(Math.round(Math.random() * (max - min) + min));


const colors = ['tomato', 'teal', 'skyblue', 'green'];
const max2 = colors.length - 1;
const min2 = 0;

const index = Math.round(Math.random() * (max2 - min2) - min2);
const color = colors[index];

console.log(color);
document.body.style.backgroundColor = color;

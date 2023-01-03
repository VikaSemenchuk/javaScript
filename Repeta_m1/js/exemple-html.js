const btnAdd = document.querySelector('button[data-add]');
// btnAdd.textContent = 'sggerwg';

console.log(btnAdd.textContent);
console.dir(btnAdd);

const valueInput = document.querySelector('input');

console.dir(valueInput);

let total = 0;

const outputEl = document.querySelector('.js-output span');
// якщо підключаємо по класах, а не data-атрибутах - обов'язково перед назвою "."
// на початку назви класу прописуємо .js-бла бла

const btnReset = document.querySelector('button[data-reset]')

btnAdd.addEventListener('click', () => {
  console.log('click plus');

  console.log(valueInput.value);
  console.log(typeof valueInput.value);

  const value = Number(valueInput.value);

  console.log(value);
  console.log(typeof value);

total += value;
outputEl.textContent = total;


console.log(`total =`, total);
valueInput.value = '';
});

btnReset.addEventListener('click', () => {
outputEl.textContent = 0;
console.log(`очищено`)
})
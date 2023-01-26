const magicBtn = document.querySelector('.js-magic-btn');
const imgEl = document.querySelector('.hero__image');
console.log(imgEl);

magicBtn.addEventListener('click', () => {
imgEl.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imgEl.alt = 'it`s fish';
console.log(imgEl);
})
console.log('');

const titleEl = document.querySelector('.hero__title');
console.log(titleEl);
console.log(titleEl.textContent);

titleEl.textContent = 'Ми солодкі булочки'
console.log(titleEl.textContent);
console.log(titleEl);
console.log('');

console.log(imgEl.getAttribute('src'));
// imgEl.removeAttribute('width');
imgEl.hasAttribute('heigth');
console.log(imgEl.hasAttribute('heigth'));
console.log('');

const actions = document.querySelectorAll('.btn');
console.log(actions[0].dataset);
console.log('data-x-', actions[0].dataset.x);
console.log('значенння data третьої кнопки -', actions[1].dataset.action);
for (const action of actions) {
    console.log('Number of actions:', actions.length);
    console.log(action.dataset.action)
}
console.log('');

const magicInputBtn = document.querySelector('.js-magic-btn-input');
console.log(magicInputBtn);

magicInputBtn.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input')
    console.log(inputEl.value);
    inputEl.value = 'i`m cool'
})
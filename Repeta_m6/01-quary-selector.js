console.log(document);
console.dir(document);
console.log('');

// const navEl = document.querySelector('ul');
// // рекомендовано уточняти в назві що саме викликаємо
// // navEl-елемент навігації
// // navRef-посилання навігації
// console.log(navEl);
// console.dir(navEl);
// console.log('');

// const navItemEl = document.querySelector('li');
// // повертає лише перше співпадіння! тому нам повернуло лише першу лішку
// console.log(navItemEl);
// console.dir(navItemEl);
// console.log('');

// const navItemElClass = document.querySelector('.site-nav__item');
// console.log(navItemElClass);
// console.dir(navItemElClass);
// console.log('');

// // якщо елемент не знайдено - ПОВЕРТАЄТЬСЯ Null
// const navItemElBtn = document.querySelector('.site-nav__btn');
// console.log(navItemElBtn);
// console.dir(navItemElBtn);
// console.log('');

// // щоб знайти всі однотипні елементи - querySelectorAll - повертає масив однотипних елементів
// const navElItems = document.querySelectorAll('li')
// console.log(navElItems);
// console.dir(navElItems);
// console.log('');

// // якщо елемент не знайдено - ПОВЕРТАЄТЬСЯ пустив масив
// const navItemElBtn2 = document.querySelectorAll('.site-nav__btn');
// console.log(navItemElBtn2);
// console.dir(navItemElBtn2);
// console.log('');

// const navElLink = navEl.querySelectorAll('a');
// console.log(navElLink);
// console.dir(navElLink);
// console.log(' ');

const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
    
    const navEl = document.querySelector('ul');
// рекомендовано уточняти в назві що саме викликаємо
// navEl-елемент навігації
// navRef-посилання навігації
console.log(navEl);
console.dir(navEl);
console.log('');

const navItemEl = document.querySelector('li');
// повертає лише перше співпадіння! тому нам повернуло лише першу лішку
console.log(navItemEl);
console.dir(navItemEl);
console.log('');

const navItemElClass = document.querySelector('.site-nav__item');
console.log(navItemElClass);
console.dir(navItemElClass);
console.log('');

// якщо елемент не знайдено - ПОВЕРТАЄТЬСЯ Null
const navItemElBtn = document.querySelector('.site-nav__btn');
console.log(navItemElBtn);
console.dir(navItemElBtn);
console.log('');

// щоб знайти всі однотипні елементи - querySelectorAll - повертає масив однотипних елементів
const navElItems = document.querySelectorAll('li')
console.log(navElItems);
console.dir(navElItems);
console.log('');

// якщо елемент не знайдено - ПОВЕРТАЄТЬСЯ пустив масив
const navItemElBtn2 = document.querySelectorAll('.site-nav__btn');
console.log(navItemElBtn2);
console.dir(navItemElBtn2);
console.log('');

const navElLink = navEl.querySelectorAll('a');
console.log(navElLink);
console.dir(navElLink);
console.log(' ');
})
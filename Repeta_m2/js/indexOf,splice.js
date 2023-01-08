/*
splice - використовується, якщо вихідний МАСИВ потрібно ЗМІНИТИ - 
видаляє, додає, і замінює елементи у довільному місці масиву
видалення - splice(position, num) - індекс і кількість ел
додавання - splice(position, 0, new_element) 0 - говориить методу, 
     що не потрібно видаляти елементи з масиву на місці додавання
заміна - splice(position, num, new_el, new_el2...) індекс і показує кількість елементів,
     яка видаляється перед додаванням нових
*/

/*
indexOf(value) - повертає перший індекс, в якому елемент зі значенням value був знайдений
в масиві, або число -1, якщо такий елемент відсутній. Використовується коли необхідно
отримати сам індекс елемента
*/
console.log(' ');

const cards = [
    'card-1',
    'card-2',
    'card-3',
    'card-4',
    'card-5',
];

const cardToRemove = 'card-3';
console.log(cards.indexOf(cardToRemove));

cards.splice(cards.indexOf(cardToRemove), 1);
console.table(cards);

const cardToInsert = 'card-6';
const index = 3;
cards.splice(index, 0, cardToInsert);
console.table(cards);

const cardToUpdate = 'card-4';
cards.splice(cards.indexOf(cardToUpdate), 1, 'updated card-4');
console.table(cards);

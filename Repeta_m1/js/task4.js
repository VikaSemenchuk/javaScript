/* написати скрипт який перевіряє можливість відкрити чат з користувачемю
для цього покистувач має бути:
-другом
-онлайн
-без режима не турбувати*/

// вести змінні стану користувача
// ввести змінну, в якій будемо перевіряти відповідність стану користувача через логічний оператор і
// вивести у консоль питання "Можна відкрити чат?" і відповідь на нього

let isOnline = true;
let isFriend = true;
let isDnd = false;

let canOpenChat = isFriend && isOnline && !isDnd; /*використовуємо оператор заперечення, 
тому що при операторі && всі умови мають бути true, а isDnd має бути false (логічно), 
тому просто заперечуємо цю змінну для отримання true */

console.log(`Можна відкрити чат?`, canOpenChat);

// АБО

let isNotDnd = true;
canOpenChat = isFriend && isOnline && isNotDnd;
console.log(`Можна відкрити чат?`, canOpenChat);

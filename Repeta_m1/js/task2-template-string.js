/* написати скрипт, який виведе рядок у форматі:
"гість Х У заселився у номер Н", підклавши замість змінних свої значення

1. створити змінні і задати їм значення
2. створити шаблон, у якому вписапти змінні і вивести у консоль*/

const firstName = 'Vika';
const secondName = 'Semenchuk';
const room = '777';
const welcomeMessage = `гість ${firstName} ${secondName} заселився у номер ${room}`;

console.log(welcomeMessage);
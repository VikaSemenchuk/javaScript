// якщо значення у дужках приводиться до false(0, "", null...), то код у тілі не виконається
// буквально якщо да - виконуй код у тілі, якщо ні - пропускай і іди далі
if('вираз, який приводиться до true or false') {
    // тіло інструкції
    // нова область видимості, за межами {} - глобальна область видимості
    /*всі змінні які оголошуються у тілі інструкції невидимі за межами інструкції
    але все що ззовні - видно всередині */
}

if(5 > 17) {
    console.log('x > y');
} else {
    console.log('x < y');
}

const salery = 600;
if(salery < 500) {
    console.log('level 1');
} else if(salery >= 500 && salery < 750) {
    console.log('level 2');
} else {
    console.log('level 3');
}


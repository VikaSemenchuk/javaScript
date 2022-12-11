const shouldRenew = confirm('продовжити підписку?');
// дужечки важливі, бо confirm - це метод, а метод завжди іде з (),
//  в дужках передаємо рядок (" "), відповідь буль

console.log(shouldRenew);
console.log(typeof shouldRenew);

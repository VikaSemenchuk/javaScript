const balance = 1000;
let message;

if(balance >= 0) {
    message = 'Позитивний баланс';
} else {
    message = 'Негативний баланс';
}
console.log(message);

// або за доп Тернарного оператора простіше:
message = balance >= 0 ? 'Позитивний баланс'/*true */ : 'Негативний баланс'/*false */;
console.log(message)
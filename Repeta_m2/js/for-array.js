// цикл для пребору масива
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends)

 for (let i = 0; i < friends.length; i +=1) {
console.log(`скільки раз пройде цикл`);
 }

 for (let i = 0; i < friends.length; i +=1) {
    
    console.log(i, friends[i]);
     }

for (let i = 0; i <= friends.length - 1; i += 1) {
    friends[i] += '-1'
    console.log(i, friends[i])
}
console.table(friends)

/**
 for цикл використовується якщо потрібно змінити елемент масиву або його індекс
 */
// використовується переважно в операціях з грошима
// заокруглює значення ко тієї кількості чисел після коми, яка вказана у дужках
let salery = 1300.43743;
salery = salery.toFixed(4);
console.log(salery);
// повертає завжди рядок, тому треба перетворити рядок в число (string-to-number)

 salery = Number(salery);
console.log(salery);

// можна коростко все записати в один рядок з доп вкладеностей 
console.log(Number(salery.toFixed(4)));

// якщо булі привести до числового значення, то вони набудуть знач 1 і 0
console.log(Number(true));
console.log(Number(false));

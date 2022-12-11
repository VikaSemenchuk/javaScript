let  elementWidth = '50px';
// відкадає все, що не число
// якщо перед числом цифра - видасть NaN - не число
// парсить з ліва на право

// const result = Number.parseInt(elementWidth);
// console.log(result);

// АБО

elementWidth  = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);
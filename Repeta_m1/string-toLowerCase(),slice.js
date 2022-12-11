const brand = 'SamSUng';
const normalizeBrand = brand.toLocaleLowerCase();

console.log(normalizeBrand);

// toUpperCase()

// slice - властивість, через яку можна доступитись до будь-якої точки рядка через індекс
// нумерація індекс починається з 0
console.log(brand[0] + brand.slice(1).toLocaleLowerCase());
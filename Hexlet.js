'use strict' // Строгий режим
/*
alert('Привет, мир!');
alert('text');

Код из курса Хекслет

console.log('Hello, World!')
console.log(8 / 2 + 5 - -3 / 2)
console.log('\\ \\ \\\\ \\ \'"')
let greet = 'Father!'
console.log(greet)

*/

let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = 50 * dollarsPerEuro;
let rublesCount = dollarsCount * rublesPerDollar;

console.log(rublesCount);



// 10

const firstName = 'Joffrey';
const greeting = 'Hello';

// console.log(greeting + ', ' + firstName + '!');
console.log(`${greeting}, ${firstName}!`);

console.log(`- Are you hungry?
- Aaaarrrgh!`)

// 11

const magic = '\nyou';
console.log(magic[1]);

const FirstName = 'Tirion';
const index = 0;

console.log(FirstName[index]); // => T
console.log(FirstName[10]); // => undefined

// 12

typeof 3;      // number
typeof 'Game'; // string

// Этот синтаксис изучается далее на Хекслете
const user = { name: 'Toto', age: 33 };

console.log(0.1 + 0.2)

const value = '0';
// Внутри скобок можно указывать переменную
const number1 = parseInt(value);
console.log(number1); // => 0

// Или конкретное значение
const number2 = parseInt('10');
console.log(number2); // => 10

// Если преобразуется число с плавающей точкой
// то отбрасывается вся дробная часть
const number5 = parseInt(3.5);
console.log(number5); // => 3

const value3 = parseFloat('0.5');
console.log(value3); // 0.5
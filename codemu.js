'use strict' // Строгий режим
// alert('text1')

// alert('text2')

/*
let num = 123;
alert(num);
*/

/*
let a = 3;
alert(a);
*/

/*
let a = 1;
let b = 2;
let c = 3;

a = 2;
b = 3;
c = 4;
*/

// let a = 10
// alert(a)

// a = 20
// alert(a)

/*
      17
let a = 1 + 2;
alert(a);

let b = 3 - 2;
alert(b);

let c = 3 * 2;
alert(c);

let d = 4 / 2;
alert(d);

let a = 1 + 2 + 3;
alert(a);

*/

/*
            18
let a = 1;
let b = 2;
let c = a + b;
alert(c);
*/

/*
let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);
*/

/*
let c = 10;
let d = 5;
let result = c + d;
alert(result);
*/

/*
let a = 1;
let b = 2;
let c = 3;
alert(a + b + c);
*/

/*  
let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);
let r = 2 * (2 + 4 * (3 + 1));
alert(r)
*/

//22

/*  
let a = 1.5;
let b = 0.75;

console.log(a + b);

a = -100;
console.log(-a);
*/

//25

//let a = 13;
//let b = 5;

//console.log(a % b);

//console.log(2 ** 10);

// 30

/*
let str = 'abcde';
alert(str.length);
alert('Disyuuun'.length);
*/

// 31
/*
let str1 = 'xxx';
let str2 = 'yyy';
let txt = `aaa ${str1} bbb ${str2} ccc`;
alert(txt);
*/

//32
/*
let str = `a
b
c`;
*/

//38

// alert(10 / 0); alert(-10 / 0);

// 42

// const PI = 3.14;

// const R = 2;
// let circleLen = PI * 2 * R;
// console.log(circleLen);

// 43

// let a = (-'5') + (-'2');
// alert(a);

// let b = '5' * 1 + '2' * 1;
// alert(b);

// let c = '' + 3 + 1;
// alert(c);

//44

// let a = ('10');
// let b = ('20');
// alert(a + b)
// alert('2' + Number('3'))

// 45

// let a = +'2';
// let b = +'3';
// alert(a + b); // выведет '23'

// 47

// let num1 = parseFloat('5px');
// let num2 = parseFloat('6px');
// let num3 = parseFloat('5.5px');
// let num4 = parseFloat('6.25px');

// let result = (`${num3 + num4}px`);

// console.log(result);

// console.log(String(num1) + String(num2));

// let numLen = 12345;
// let str = String(numLen);
// alert(str.length);

// let numLen = 12345;
// alert(String(numLen).length);

// let a = 12;
// let b = 4252;

// let c = String(a).length;
// let d =String(b).length;

// console.log(Number(c) + Number(d));

// 50
// console.log(String(true));  // выведет 'true'
// console.log(String(false)); // выведет 'false'
// alert(String(true) + Number(true));

//51
// let test = Boolean('false')
// alert(test)
// let test1 = Boolean(3 * 'abc')
// alert(test1)
// let test2 = Boolean(1 / 0)
// alert(test2)

//52

// let str = 'abcde'
// let num = 2
// alert(str[0])
// alert(str[2])
// alert(str[4])

// let str1 = (`${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`)
// alert(str1)
// alert(str[num])

// 54

// let str = 'abcde'
// alert(str[str.length - 1])
// alert(str[str.length - 2])
// alert(str[str.length - 3])

// 55

// let test = '12345'

// alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]))

// 56

// let num = 12345
// let test = String(num)

// console.log(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]))

// console.log(Number(test[0]) * Number(test[1]) * Number(test[2]) * Number(test[3]) * Number(test[4]))

// console.log(
// (test[4]) +	(test[3]) +	(test[2]) + (test[1]) + (test[0]))

// 58

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

//59

// let num1 = 0;
// num1++;
// console.log(num1);
// num1--;
// console.log(num1);

// let num = 10
// num++
// num++
// num--
// alert(num)

// 60
// let num1 = 3
// let num2 = ++num1
// alert(num1)
// alert(num2)

// let num1 = 3
// num1++
// let num2 = num1--
// alert(num1++)
// alert(--num2)

// 61
// alert((0.1 * 0.2).toFixed(2));
// alert(+(0.3 - 0.1).toFixed(2));

// 62

// let name = prompt('Ваше имя?')
// alert('Ваше имя: ' + name)

// let age = prompt('Ваш возраст? ')
// alert('Ваш возраст: ' + age)

// 63

// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');

// alert(Number(num1) + Number(num2));

// let side = Number(prompt('Введите длину стороны квадрата'));
// let square = side ** 2;
// alert(square);

// let side1 = Number(prompt('Введите длину первой стороны прямоугольника'));
// let side2 = Number(prompt('Введите длину второй стороны прямоугольника'))
// alert(2 * (side1 + side2));

// 64

// document.write(123);
// document.write(' text')
// document.write(' <b>text</b>')

// let str = ' text'
// document.write(str)
// document.write('<i>' + str + '</i>')
// document.write('text <br> text<br>')
// document.write('text1<br>')
// document.write('text2<br>')
// document.write('text3<br>')
// document.write('text')
// document.write('<br>')
// document.write('text')
// document.write('<br>'+ 1 + '<br>')
// document.write(2 + '<br>')
// document.write(3 + '<br>')
// document.write(4 + '<br>')
// document.write(5 + '<br>')

// 65 Поиск ошибок

// let num1 = 1;
// let num2 = 2;
// console.log(`сумма: ${num1 + num2}`);

// let a = 1;
// let b = 2;
// console.log(a + b);

// let num = '123';
// let sum = +num[0] + +num[1] + +num[2];
// console.log(sum)

// let num = String(123);
// console.log(num[0])

// let a = 0;
// console.log(++a);

// let num = 123;
// num = String(num);
// console.log(num.length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1])

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let a = '123';
// let b = '456';
// let c = Number(a) + Number(b);
// console.log(c);

// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a + b + c);

//66

//console.log(60 * 60 * 24)

//console.log(6 * 60 * 24 * 30)

// console.log(6 * 60 * 24 * 365)

// console.log(60 * 24)

// console.log(60 * 24 * 365)

// console.log(1024 * 1024)

// console.log(1024 * 1024 * 1024)

// console.log(1024 * 1024 * 1024 * 10)

// console.log(1024 * 1024 * 1024 * 1024)

// console.log(1024 * 1024 * 1024)

//  67

// const PI = 3.14;
// let r = 14;
// let s = PI * r ** 2;
// console.log(s)

// let a = 5;
// let s = a ** 2;
// console.log(s);

// let a = 3;
// let b = 4;
// let s = a * b;
// console.log(s)

// let a = 3;
// let b = 5;
// let p = 2 * (a + b);
// console.log(p);

// let tc = 351;
// let tf = tc * 9 / 5 + 32;
// console.log(tf);

// let tf = 480;
// let tc = (tf - 32) * 5 / 9;
// console.log(tc);
// console.log(Math.PI)

// 68

// let arr = ['a', 'b', 'c', 1, 2, 3]
// console.log(arr[5])

// let arr = [1, 2, 3]
//  console.log(arr[0], arr[1], arr[2])
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[0] + arr[1] + arr[2])

//69

// let arr = ['a', 'b', 'c', 'd']
// console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`)

// 70

// let arr = [5, 6, 7, 8, 9]

// console.log(arr.length)
// console.log(arr[arr.length - 1])

// 71

// let arr = ['a', 'b', 'c']
// console.log(arr)
// // arr[0] = '!'
// // console.log(arr)
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// console.log(arr)

// 72

// let arr = [5, 6, 7, 8, 9]

// arr[0] += 3
// arr[1] += 3
// arr[2] += 3
// arr[3] += 3
// arr[4] += 3

// console.log(arr)

// 73

// let arr = [1, 2, 3]
// arr[0]++
// arr[1]++
// arr[2]++

// console.log(arr)

// 74

// let arr = []

// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// console.log(arr)
// arr[3] = 4
// arr[4] = 5
// console.log(arr)

// 75

// let arr = []

// arr[3] = 'a'
// arr[8] = 'b'
// console.log(arr.length)

//76

// let arr = []

// arr.push('a')
// arr.push('b')
// arr.push('c')
// console.log(arr)

// arr.push(1)
// arr.push(2)
// arr.push(3)
// console.log(arr)
// arr.push(4)
// arr.push(5)
// console.log(arr)

//77

// let arr = ['a', 'b', 'c']
// let key = 2
// console.log(arr[key])

// let arr = [1, 2, 3, 4, 5]

// let key1 = 1
// let key2 = 2

// console.log(arr[key1] + arr[key2])

// 78

// let arr = ['a', 'b', 'c']
// console.log(arr.length)
// delete arr[1]
// console.log(arr)
// console.log(arr.length)

// let arr = ['a', 'b', 'c', 'd', 'e']
// delete arr[4]
// delete arr[2]
// console.log(arr.length)

// 79

// let arr = [1, 2, 3, 4, 5]
// console.log(arr[arr.length - 1])

// let arr = [1, 2, 3, 4, 5]
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length)

// 80

// let obj = {1: 'a', 2: 'b', 3: 'c'}
// console.log(obj[1])

// let obj = { 1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресенье'}

// console.log(obj[3])

// 81

// let obj = {
// 	1: 'январь',
// 	2: 'февраль',
// 	3: 'март',
// 	4: 'апрель',
// 	5: 'май',
// 	6: 'июнь',
// 	7: 'июль',
//       8: 'август',
//       9: 'сентябрь',
//       10:'октябрь',
//       11: 'ноябрь',
//       12: 'декабрь'
// }

// console.log(obj)

// 82

// let user =  {name: 'Denis', surname: 'Kokoreff', patronymic: 'Nikolaevich'}

// console.log(`${user['surname']} ${user['name']} ${user['patronymic']}`)

// 83

// let date = {year: 2025, month: 'may', day: 9}

// console.log(`${date.year}-${date.month}-${date.day}`)

// 84

// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	'e5': 5
// };

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['с-с'])
// console.log(obj['d 4']);
// console.log(obj.e5);

// 85

// let obj = { a: 1, b: 2, c: 3 }
// obj['a'] = '!'
// console.log(obj)

// let obj = { x: 1, y: 2, z: 3 }
// obj['x'] **= 2
// obj['y'] **= 2
// obj['z'] **= 2
// console.log(obj.x, obj.y, obj.z)

// 86

// let obj = {}

// obj.a = 1
// obj.b = 2
// obj.c = 3
// console.log(obj)

// 88

// let obj = {a: 1, b: 2, c: 3}
// let keys = Object.keys(obj)
// console.log(keys)

// let obj = { x: 1, y: 2, z: 3 }
// let keys = Object.keys(obj)
// console.log(keys)

// 89

// let obj = {x: 1, y: 2, z: 3}
// console.log(Object.keys(obj).length)

// 90

// let obj = { x: 1, y: 2, z: 3 }

// let key = 'z'
// console.log(obj[key])

// 91

// let obj = { x: 1, y: 2, z: 3 }
// console.log(obj['x'])

// let obj = { x: 1, y: 2, z: 3 }
// let key = 'x'
// console.log(obj[key])

// 92

// let obj = { x: 1, y: 2, z: 3 }

// let prop = 'x'
// console.log(obj[prop])

// let obj = { x: 1, y: 2, z: 3 }

// let prop = 'x'
// console.log(obj[prop])

// 93

// let key = 'x'

// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3,
// }

// let key1 = 'x'
// let key2 = 'y'
// let key3 = 'z'

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3,
// }
// console.log(obj)

// 94

// let obj = { x: 1, y: 2, z: 3 }

// console.log('x' in obj)
// console.log('w' in obj)

// 95

// let obj = { x: 1, y: 2, z: 3 }
// delete obj.x

// console.log('x' in obj)

// 96

// console.log(typeof {}); // выведет 'object

// let obj = { x: 1, y: 2, z: 3 }
// console.log(typeof obj)

// let obj = { x: 1, y: 2, z: 3 }
// console.log(typeof obj['x'])

// 97

// let arr = ['1', 2, 3]
// console.log(typeof arr[0])

// 98

// console.log(Array.isArray({ x: 1, y: 2, z: 3 }))
// console.log(Array.isArray([1, 2, 3]))

// 99
// 100

// 101
// const obj = { a: 1, b: 2, c: 3 }
// obj.a = '+';
// console.log(obj)

// const arr = ['a', 'b', 'c']
// arr[1] = '!'
// console.log(arr)

// const arr = ['a', 'b', 'c']
// arr = [1, 2, 3]
// console.log(arr)

// const arr = ['a', 'b', 'c']
// arr = ['a', 'b', 'c']
// console.log(arr)

// 102
// const arr = [1, 2, 3, 4, 5]
// const res = arr[1] + arr[2]

// console.log(res)

// 103

// let obj = {x: 1, y: 2, z: 3}

// console.log(obj.x)

// let obj = { x: 1, y: 2, z: 3 }
// let key = 'x'

// console.log(obj[key])

// let obj = { x: 1, y: 2, z: 3 }
// let sum = obj.x + obj.y + obj.z

// console.log(sum)

// let obj = { x: 1, y: 2, z: 3 }

// console.log(Object.keys(obj).length)

// 120

// let test = true

// if (test) {
//       console.log('+++')
// } else {
//       console.log('---')
// }

// if (!test) {
//       console.log('+++')
// } else {
//       console.log('---')
// }

//123

// let test1 = true
// let test2 = true
// let test3 = true

// if (test1 && test2) {
//       console.log('+++')
// }else {
//       console.log('---')
// }

// if (test1 && !test2) {
//       console.log('+++')
// }else {
//       console.log('---')
// }

// if (!(test1 && test2)) {
//       console.log('+++')
// }else {
//       console.log('---')
// }

// if (test1 && test2) {
//       console.log('+++')
// } else {
//       console.log('---')
// }

// if (test1 && test2 && test3) {
//       console.log('+++')
// }else {
//       console.log('---')
// }

// if (test1 || test2 || test3) {
//       console.log('+++')
// }else {
//       console.log('---')
// }

// if (test1 || !test2 && !test3) {
//       console.log('+++')
// }else {
//       console.log('---')
// }

// 125

// let test = 1

// if (test > 0)
//       console.log('+++');
// else
//       console.log('---');

// if (test > 0)
//       console.log('+++')

// 127

// const randInt = (min = 1, max = 31) => {
// return Math.floor(min + Math.random() * (max - min + 1))
// }

// let day = randInt()

// console.log(day)

// if (day <= 10) {
//       console.log('первый десяток')
// } else if (day <= 20) {
//       console.log('второй десяток')
// } else if (day <= 31) {
//       console.log('третий десяток')
// } else {
//       console.log('ошибка!')
// }

// 128

// let num = String(29)

// if (num >= 10 && num <= 99) {
//       console.log(+num[0] + +num[1])
//       if (+num[0] + +num[1] <=  9) {
//             console.log('сумма цифр однозначна')
//       } else {
//             console.log('сумма цифр двухзначна')
//       }
// }

// 129

// let num = 3

// switch (num) {
//       case 1:
//             console.log('value1')
//       break
//       case 2:
//             console.log('value2')
//       break
//       case 3:
//             console.log('value3')
//       break
//       default:
//             console.log('incorrect value')
//       break
// }

// let lang = 'en'

// switch (lang) {
//       case 'ru':
//             console.log('рус')
//       break
//       case 'en':
//             console.log('анг')
//       break
//       case 'de':
//             console.log('нем')
//       break
//       default:
//             console.log('язык не поддерживается')
//       break
// }

// 131

// let num = 1
// let res

// res = num >= 0 ? '1' : '2';
// console.log(res)

// 132

// let a = 2 * (3 - 1)
// let b = 6 - 2
// console.log(a == b)

// let a = 5 * (7 - 4)
// let b = 1 + 2 + 7
// console.log(a > b)

// let a = 2 ** 4
// let b = 4 ** 2
// console.log(a != b)

// 133

// let ok = confirm('Текст вопроса');

// if (ok) {
// 	console.log('вы ответили да');
// } else {
// 	console.log('вы ответили нет');
// }

// 133

// let censor = confirm('Вам есть 18 лет?')

// if (censor)
//       alert('пиво сигареты сиськи')
// else
//       alert('доступ запрещен')

//134

// let age = 17
// let adult

// if (age >= 18) {
//       adult = true
// } else {
// 	adult = false
// }

// console.log(adult)

// let age = 17
// let adult

// if (age >= 18) {
// 	adult = true
// } else {
// 	adult = false
// }

// console.log(adult)

// let age = 17
// let adult

// if (age >= 18) {
// 	adult = true
// } else {
// 	 adult = false
// }

// console.log(adult)

// let age = 17
// let res

// if (age >= 18) {
// 	if (age <= 23) {
// 		res = 'от 18 до 23'
// 	} else {
// 		res = 'больше 23'
// 	}
// } else {
// 	res = 'меньше 18'
// }

// console.log(res)

// let age = 19
// let res

// if (age >= 18) {

// 	if (age <= 23) {
// 		res = 'от 18 до 23'
// 	} else {
// 		res = 'больше 23'
// 	}
// } else {
// 	res = 'меньше 18'
// }

// console.log(res)

// 136

// let min = 1

// if (min >= 0 && min <= 20)
//       console.log('1 треть')

// if (min >= 21 && min <= 40)
//       console.log('2 треть')

// if (min >= 41 && min <= 60)
//       console.log('3 треть')

// 137

// let arr = ['ghd', '2', 't']

// if (arr.length == 3)
//       console.log(arr[0] + arr[1] + arr[2])

// 138

// let str = 'a12345'
// let last = str[(str.length - 1)]

// if (str[0] == 'a' || str[0] == 'b') {
// 	console.log('!!!')
// }

// if (last == 'x')
//       console.log('!')

// 139

// let num = 123450
// let last = (String(num).length - 1)

// if (String(num)[last] === '0')
//       console.log('true')
// else
//       console.log('false')

// let num = -2

// if (num % 2 == 0)
//       console.log('even')

// 140

// let num = 10

// if (num % 2 == 0)
//       console.log('even')

// let num = 30

// if (num % 3 === 0)
//       console.log('делится на 3')
// else
//       console.log('не делится на 3')

// 141

// let num1 = 1
// let num2 = 2

// if (num1 + num2 === 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num1 = '1'
// let num2 = '2'

// if (+num1 + +num2 === 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num1 = '1'
// let num2 = '2'

// if (Number(num1) + Number(num2) === 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 123
// num = String(num)

// if (+num[0] === 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 123
// num = String(num)
// if (+num[0] === 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 123
// num = String(num)

// if (+(num)[0] === 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 123
// let first = String(num)[0]

// if (+first === 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 12
// let str = String(num)

// if (str.length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

// let num = '123033' // берем в кавычки, чтобы обращаться к цифрам

// let sum1 = +num[0] + +num[1] + +num[2]
// let sum2 = +num[3] + +num[4] + +num[5]

// if (+sum1 == +sum2) {
// 	console.log('суммы равны')
// } else {
// 	console.log('суммы не равны')
// }

// 142

// let month = 8
// let season
// if (month > 0 && month <= 2 || month == 12) {
//       season = 'Зима'
// } else if (month >= 3 && month <= 5) {
//       season = 'Весна'
// } else if (month >= 6 && month <= 8) {
//       season = 'Лето'
// } else if (month >= 9 && month <= 11) {
//       season = 'Осень'
// } else season = 'ERROR'

// console.log(season)

// let str = 'abcde'

// if (str[0] === 'a')
//       console.log('да')
// else
//       console.log('нет')

// let num = 12345
// let first = String(num)[0]

// if (first == 1 || first == 2 || first == 3)
//       console.log('да')
// else
//       console.log('нет')

// let num = '123'

// let sum = +num[0] + +num[1] + +num[2]
// console.log(sum)

// let num = '345678'

// let sum1 = +num[0] + +num[1] + +num[2]
// let sum2 = +num[3] + +num[4] + +num[5]

// if (sum1 == sum2)
//       console.log('да')
// else
//       console.log('нет')

//  144

// let arr = [1, 2, 3, 4, 5]

// for (let elem  of arr)
//       console.log(elem)

// let arr = ['a', 'b', 'c', 'd', 'e']
// let elem

// for (elem of arr) {
//       console.log(elem)
// }

// 145

// let obj = { a: 1, b: 2, c: 3 }
// let key

// for (key in obj) {
//       console.log(key)
//       console.log(obj[key])
// }

// let obj = { x: 1, y: 2, z: 3 }
// let key

// for (key in obj) {
//       // console.log(key)
//       console.log(obj[key])
// }

// 146

// let i = 1

// while (i <= 5) {
//       console.log(i)
//       i++
// }

// let num = 500

// while (num > 10) {
//       console.log(num)
//       num /= 2
// }

// let i = 1

// while (i <= 100) {
//       console.log(i)
//       i++
// }

// let i = 11

// while (i <= 33) {
//       console.log(i)
//       i++
// }

// let num = 35

// while (num <= 1000) {
//       console.log(num)
//       num *= 3
// }
// console.log(num)

// 147

// for (let i = 10; i > 0; i--) {
// 	console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//       console.log(i)
// }

// for (let i = 11; i <= 33; i++) {
// 	console.log(i)
// }

// for (let i = 0; i <= 100; i += 2) {
// 	console.log(i)
// }

// for (let i = 1; i <= 99; i += 2) {
// 	console.log(i)
// }

// for (let i = 100; i >= 0; i--) {
// 	console.log(i)
// }

// 148

// let arr = ['a', 'b', 'c', 'd', 'e']

// for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i])
// }

// for (let i = 1; i < arr.length - 1; i++) {
//       console.log(arr[i])
// }

// for (let i = arr.length - 1; i >= 0; i--)
//       console.log(arr[i])

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i])
// }

// 149

// let arr = [1, 2, 3, 4, 5]

// for (let elem of arr) {
//       if (elem % 2 == 0) {
//       console.log(elem)
//       }
// }

// let arr = [2, 5, 9, 15, 1, 4]

// for (let elem of arr) {
//       if (elem > 3 && elem < 10) {
//             console.log(elem)
//       }
// }

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }

// for (let elem in obj) {
//       if (obj[elem] % 2 == 1) {
//             console.log(obj[elem])
//       }
// }

// 150

// let res = 0

// for (let i = 1; i <= 100; i++) {
//       res += i
// }

// console.log(res)

// let res = 0

// for (let i = 2; i <= 100; i += 2) {
// 	res += i
// }

// console.log(res)

// let res = 0

// for (let i = 1; i <= 99; i += 2) {
// 	res += i
// }

// console.log(res)

// let res = 0

// for (let i = 1; i <= 20; i++) {
// 	res += i
// }

// console.log(res)

// 151

// let arr = [1, 2, 3, 4, 5];
// let res = 0;

// for (let elem of arr) {
//       res += elem;
// }

// console.log(res)

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0

// for (let elem of arr) {
//       res += elem
// }

// console.log(res)

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 0

// for (let elem of arr) {
//       if (elem % 2 == 0) {
// 	res += elem
//       }
// }

// console.log(res)

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 0

// for (let elem of arr) {
// 	elem **= 2;
//       res += elem
// }

// console.log(res)

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 1

// for (let elem of arr) {
//       res *= elem
// }

// console.log(res)

// 152

// let str = ''

// for (let i = 0; i < 10; i++) {
//       str += 'x'
// }

// console.log(str)

// let str = ''

// for (let i = 1; i <= 5; i++) {
//       str += i
// }

// console.log(str)

// let str = ''

// for (let i = 1; i <= 5; i++) {
//       str += '-'
// }

// console.log(str)

// let str = ''

// for (let i = 1; i < 10; i++) {
// 	str += i
// }

// console.log(str)

// let str = ''

// for (let i = 9; i > 0; i--) {
// 	str += i
// }

// console.log(str)

// let str = ''

// for (let i = 1; i < 10; i++) {
// 	str += '-'
//       str += i
// }
// str += '-'
// console.log(str)

// 153

// for (let i = 10; i <= 1000; i++) {
//       let str = String(i)
//       console.log(str[0])
// }

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)
// 	console.log(+str[0] + +str[1])
// }

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)
// 	if (str[0] == 1) {
// 		console.log(str)
// 	}
// }

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)
// 	if (+str[0] + +str[1] == 5) {
// 		console.log(str)
// 	}
// }

// 154

// let arr = [1, 2, 3, 4, 5]

// for (let elem of arr) {
//       if (elem == 3) {
//             console.log('ECTb')
//             break
//       }
// }

// let arr = [1, 2, 5, 0, 10]

// for (let elem of arr) {
//       console.log(elem)
//       if (elem == 0) {
//             break
//       }
// }

// let arr = [42, 52, -2, -100, 228, -52]
// let i = 0
// let sum = 0

// for (let elem of arr) {
//       if (elem >= 0) {
//             sum += arr[i]
//             i++
//             console.log(sum)
//       }
//       else {
//             break
//       }
// }

// let arr = [1, 4, 6, 2, 6, 3]
// let i = 0

// for (let elem of arr) {
//       if (elem == 3) {
//             console.log(i)
//             break
//       }
//       i++
// }

// let num = 0
// let count = 0
// for (let i = 1; num <= 100; i++) {
//       num += i
//       count++
// }

// console.log(count)

// let arr = []
// let i = 1
// let sum = 0

// while (i <= 100) {
//       arr.push(i)
//       i++
// }

// for (let elem of arr) {
//       sum += elem
//       console.log(sum)
//       if (sum >= 100) {
//             break
//       }
// }
// console.log(sum)

// 155

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// for (let elem of arr) {
//       let res
//       if (elem % 2 == 0) {
//             res = elem * elem
//       }
//       else if (elem % 3 == 0) {
//             res = elem * elem * elem
//       }
//       else {
//             continue
//       }
//       console.log(res)
// }

// 156

// for (let i = 1; i <= 9; i++) {
//       for (let j = 1; j <= 3; j++) {
//             document.writeln(i)
//       }
// }

// let j
// for (let i = 1; i <= 3; i++) {
//       j = 1
//       while (j <= 3) {
//             document.writeln(i, j)
//             j++
//             continue
//       }

// }

// 159

// let arr = []

// for (let i = 1; i <= 10; i++) {
//       arr.push(i)
// }
// console.log(arr)

// let arr = []

// for (let i = 1; i <= 10; i++) {
//       arr.push('x')
// }
// console.log(arr)

// let arr1 = [-100, -1, 0, 10, 52, 1]
// let arr2 = []

// for (let elem of arr1) {
//       if (elem > 0) {
//             arr2.push(elem)
//       }
//       console.log(arr2)
// }

// 160

// let arr = [1, 2, 3, 4, 5, 6]

// // for (let i = 0; i < arr.length; i++) {
// //       arr[i] = arr[i] * 2
// // }
// // console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < arr.length; i++) {
//       arr[i] *= arr[i]
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < arr.length; i++) {
//       arr[i] -= 1
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] += 10
// }
// console.log(arr)

// 161

// let keys = ['a', 'b', 'c', 'd', 'e']
// let values = [1, 2, 3, 4, 5]
// let obj = {}

// for (let i = 0; i <= 4; i++) {
//       let key = keys[i]
//       let value = values[i]

//       obj[key] = value
//       console.log(obj)
// }

// for (let i = 0; i <= 4; i++) {
//       obj[keys[i]] = values[i]
//       console.table(obj)
// }

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let arr2 = [1, 2, 3, 4, 5, 6, 7]
// let obj = {}

// for (let i = 0; i < 7; i++) {
//       obj[arr1[i]] = arr2[i]
//       console.log(obj)
// }

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let newObj = {}

// for (let key in obj) {
//       if (obj[key] % 2 == 0) {
//             newObj[key] = obj[key]
//       }
//       console.log(newObj)
// }

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let newObj = {}

// for (let key in obj) {
//       newObj[obj[key]] = key
//       console.log(newObj)

// }

// 162

// let obj = { x: 1, y: 2, z: 3 }

// for (let key in obj) {
//       obj[key] = obj[key] * obj[key]
// }
// console.log(obj)

// let obj = { x: 1, y: 2, z: 3 }

// for (let key in obj) {
//       obj[key] += 1
// }
// console.log(obj)

// 163

// let arr = [1, 2, 3, 3, 4, 5]
// let flag = false

// for (let elem of arr) {
//       if (elem == 3) {
//             flag = true
//             break
//       }
// }

// if (flag == true) {
//       console.log('+++')
// } else {
//       console.log('---')
// }

// let arr = ['a', 'b', 'c', 'd', 'e']
// let flag = false

// for (let elem of arr) {
//       if (elem == 'c') {
//             flag = true
//       }
// }

// if (flag == true) {
//       console.log('+++')
// } else {
//       console.log('---')
// }

// function isPrime(num) {
// 	if (num <= 1) return false // Числа меньше или равные 1 не являются простыми
// 	if (num <= 3) return true // 2 и 3 - простые числа

// 	// Проверяем делимость на 2 и 3
// 	if (num % 2 === 0 || num % 3 === 0) return false

// 	// Проверяем делимость на числа от 5 до sqrt(num)
// 	for (let i = 5; i * i <= num; i += 6) {
// 		if (num % i === 0 || num % (i + 2) === 0) return false
// 	}

// 	return true
// }

// console.log(isPrime(18))

// 164

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0

// for (let elem of arr) {
//       if ((String(elem)[0]) == 1 || ((String(elem)[0]) == 2)) {
//             sum += elem
//       }
// }

// console.log(sum)

// 165

// let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 }
// let sum = 0

// for (let elem in obj) {
// 	if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
// 		sum += obj[elem]
// 	}
// }

// console.log(sum)

// 166

// for (let i = 0; i <= 10; i++) {
// 	console.log(i)
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i)
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i)
// }

// let i = 0

// while (i <= 10) {
// 	console.log(i)
// 	i++
// }

// let res = 0

// for (let i = 1; i <= 10; i++) {
// 	res += i
// }

// console.log(res)

// let res = 1

// for (let i = 1; i <= 10; i++) {
// 	res *= i
// }

// console.log(res)

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15

// let arr = [1, 2, 3, 4, 5]
// let arr2 = []

// for (let elem of arr) {
// 	arr2[elem] = elem ** 2

// }
// arr2.splice(0,1)
// console.log(arr2)

// let arr = []

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i)
// }

// console.log(arr)

// let obj = { a: 1, b: 2, c: 3 }
// let sum = 0

// for (let elem in obj) {
// 	sum += obj[elem]
// }

// console.log(sum)

// let obj = { a: 1, b: 2, c: 3 }
// let sum = 0

// for (let key in obj) {
// 	sum += +obj[key]
// }

// console.log(sum)

// let arr = [1, 2, 3, 4, 5]
// let res = ''

// for (let elem of arr) {
// 	if (elem == 3) {
// 		res = '+++'
//             break
// 	} else {
// 		res = '---'
// 	}
// }

// console.log(res)

// let arr = []

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i)
// }

// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// let res = false

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = true
// 		break
// 	}
// }

// console.log(res)

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = []

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		res.push(elem)
// 	}
// }

// console.log(res)

// 167

// for (let i = 1; i <= 100; i++) {
//       console.log(i)
// }

// for (let i = 100; i >= 1; i--) {
//       console.log(i)
// }

// for (let i = 0; i <= 100; i += 2) {
//       console.log(i)
// }

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//       arr.push('x')
// }
// console.log(arr)

// let arr = []

// for (let i = 1; i <= 10; i++) {
//       arr.push(i)
//       console.log(arr)
// }

// let arr = [69, 28, 96, 7, 8, 2, 12, 5, 100]

// for (let elem of arr) {
//       if (elem > 0 && elem < 10) {
// 			console.log(elem)
// 			}

// }

// let arr = [69, 28, 96, 7, 8, 2, 12, 5, 100]

// for (let elem of arr) {
//       if (elem === 5) {
//             console.log('+++');
//       }
//       else {
//             console.log('---')
//       }
// }

// let arr = [69, 28, 96, 7, 8, 2, 12, 5, 100]
// let sum = 0

// for (let elem of arr) {
//       sum += elem
//       console.log(sum)
// }

// let arr = [69, 28, 96, 7, 8, 2, 12, 5, 100]
// let sum = 0

// for (let elem of arr) {
//       sum += elem * elem
//       console.log(sum)
// }

// let arr = [69, 28, 96, 7, 8, 2, 12, 5, 100]
// let sum = 0

// for (let elem of arr) {
//       sum += elem
// }

// console.log(sum / arr.length)

// let num = 8
// let fact = 1

// for (let i = 1; i <= num; i++ ) {
//       fact *= i
//       console.log(fact)
// }

// let arr = []

// for (let i = 10; i >= 1; i-- ) {
//       arr.push(i)
//       console.log(arr)
// }

// let arr = [1, -5, 9, -9, 14, -1]
// let sum = 0

// for (let elem of arr) {
//       if (elem >= 1) {
//             sum += elem
//             console.log(sum)
//       }
// }

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let elem of arr) {
//       if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
//             console.log(elem)
//       }
// }

// let arr = [1, 2, 3, 4, 5, 7, 10]

// for (let i = arr.length - 1; i >= 0; i --) {
//       console.log(String(arr[i]))
// }

// let arr = [0, 2, 3, 3, 4, 6, 1, 7]

// for (let elem of arr) {
//       if (elem == arr.indexOf(elem))
//             console.log(elem)
// }

// let arr = [1, 3, 3, 7]

// for (let elem of arr) {
//       document.writeln(elem, "<br>")
// }

// let arr = [1, 3, 3, 7]

// for (let elem of arr) {
//       document.writeln("<p>", elem, "</p>")
// }

// let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

// for (let i = 0; i < arr.length; i++) {
//       if (i >= 5) {
//             document.writeln('<b>' + arr[i] + '</b>')
//       } else {
//             document.writeln(arr[i])
//       }
// }

// let arr = [
// 	'monday',
// 	'tuesday',
// 	'wednesday',
// 	'thursday',
// 	'friday',
// 	'saturday',
// 	'sunday',
// ]
// let day = 'tuesday'

// for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == day) {
//                   document.writeln('<i>' + arr[i] + '</i>')
//             } else {
//                   document.writeln(arr[i])
//             }
//       }

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// }

// for (let elem in obj) {
//       console.log(Math.round(+obj[elem] * (1.1)))
// }

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// }

// for (let elem in obj) {
//       if (obj[elem] <= 400) {
//       console.log(Math.round(+obj[elem] * (1.1)))
//       } else {
//             console.log(obj[elem])
//       }
// }

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let obj = {}

// for (let i = 0; i < arr1.length; i++) {
//       obj[arr1[i]] = arr2[i]

// }
// console.log(obj)

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 }
// let i = 0
// let j = 0

// for (let elem in obj) {
//       i += +elem
//       j += +obj[elem]
// }
// console.log(i / j)

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let arr1 = []
// let arr2 = []

// for (let elem in obj) {
//       arr1.push(elem)
//       arr2.push(obj[elem])
// }
// console.log(arr1, arr2)

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// }
// let arr = []

// for (let elem in obj) {
//       if (String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2) {
// 				arr.push(obj[elem])
// 			}
//       console.log(arr)
// }

// let arr = ['a', 'b', 'c', 'd', 'e']
// let obj = {}

// for (let i = 1; i <= arr.length; i++) {
//       obj[i] = arr[i - 1]
// }
// console.log(obj)

// let arr = ['a', 'b', 'c', 'd', 'e']
// let obj = {}

// for (let i = 0; i < arr.length; i++) {
// 	obj[arr[i]] = i + 1
// }
// console.log(obj)

// 168

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ]

// console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0])

// let arr = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ]

// // console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1])
// let res = 0

// for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//             res += arr[i][j]
//             console.log(res)
//       }
// }

// 169

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ]
// let res = 0

// for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//             for (let k = 0; k < arr[i][j].length; k++) {
//                   res += arr[i][j][k];
//                   console.log(res);
//             }
//       }
// }

// 170

// let arr = [
// 	[1, 2, 3, [4, 5, [6, 7]]],
// 	[8, [9, 10]],
// ]

// console.log(
// 	arr[0][0] +
// 		arr[0][1] +
// 		arr[0][2] +
// 		arr[0][3][0] +
// 		arr[0][3][1] +
// 		arr[0][3][2][0] +
// 		arr[0][3][2][1] +
// 		arr[1][0] +
// 		arr[1][1][0] +
// 		arr[1][1][1]
// )

// 171

// let arr = [
// 	[1, 2, 3, 4, 5],
// 	[6, 7, 8],
// 	[9, 10],
// ]

// for (let subArr of arr) {
//       for (let elem of subArr) {
//             console.log(elem)
//       }
// }

// let arr = [[1, 2, 3], [4, 5], [6]]
// let res = 0

// for (let subArr of arr) {
//       for (let elem of subArr) {
//             res += elem;
//       }
// }
// console.log(res)

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ]
// let res = 0

// for (let subArr of arr) {
//       for (let subSubArr of subArr) {
//             for (let elem of subSubArr) {
//                   res += elem
//                   console.log(res)
//             }
//       }
// }

// 172

// let res = 0
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		for (let k = 0; k < arr[i][j].length; k++) {
// 			 res += arr[i][j][k]
// 			console.log(res)
// 		}
// 	}
// }

// 173

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1)
// 	}
// }
// console.log(arr)

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1)
// 	}
// }
// console.log(arr)

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push('x')
// 	}
// }
// console.log(arr)

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = []
// 		for (let k = 0; k < 5; k++) {
// 			arr[i][j].push(k + 1)
// 		}
// 	}
// }
// console.log(arr)

// 174

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

// 175

// let arr = []

// for (let i = 0, k = 1; i < 4; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(k)
// 		k++
// 	}
// }
// console.log(arr)

// let arr = []

// for (let i = 0, k = 2; i < 4; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k)
// 		k += 2
// 	}
// }
// console.log(arr)

// let arr = []

// for (let i = 0, k = 1; i < 2; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = []
// 		for (let m = 0; m < 2; m++) {
// 			arr[i][j].push(k)
// 			k++
// 		}
// 	}
// }
// console.log(arr)

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++
// 	}
// }

// console.log(arr);

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++
// 	}
// }

// console.log(arr)

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++
// 	}
// }

// console.log(arr)

// 176

// let obj = {
// 	a: {
// 		key1: 'a1',
// 		key2: 'a2',
// 		key3: 'a3',
// 	},
// 	b: {
// 		key1: 'b1',
// 		key2: 'b2',
// 		key3: 'b3',
// 	},
// 	c: {
// 		key1: 'c1',
// 		key2: 'c2',
// 		key3: 'c3',
// 	},
// }
// console.log(obj['c']['key2'])

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let res = 0

// for (let elem in obj) {
// 	for (let subElem in obj[elem]) {
// 		res += (obj[elem][subElem])
// 	}
// }
// console.log(res)

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log(obj[2][2], obj[3][1])

// let obj = {
// 	key1: {
// 		a: 1,
// 		b: 2,
// 		c: {
// 			d: 3,
// 			e: 4,
// 		},
// 		f: 5,
// 	},
// 	key2: {
// 		g: 6,
// 		h: 7,
// 	},
// }
// let res =
// 	obj['key1']['a'] +
// 	obj['key1']['b'] +
// 	obj['key1']['c']['d'] +
// 	obj['key1']['c']['e'] +
// 	obj['key1']['f'] +
// 	obj['key2']['g'] +
// 	obj['key2']['h']

// console.log(res)

// 177

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let res = 0

// for (let key in obj) {
//       let subObj = obj[key]
//       for (let subKey in subObj) {
//             res += subObj[subKey]
//       }
// }
// console.log(res)

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// let res = 0

// for (let key in obj) {
//       let subObj = obj[key]
//       for (let subKey in subObj) {
//             let subSubObj = subObj[subKey]
//             for (let subSubKey in subSubObj) {
//                   res += subSubObj[subSubKey]
//             }
//       }
// }
// console.log(res)

// 178

// let students = {
// 	group1: ['name11', 'name12', 'name13'],
// 	group2: ['name21', 'name22', 'name23'],
// 	group3: ['name31', 'name32', 'name33'],
// }

// console.log(students['group3'][0])

// 179

// let data = {
// 	1: ['data11', 'data12', 'data13'],
// 	2: ['data21', 'data22', 'data23'],
// 	3: ['data31', 'data32', 'data33'],
// 	4: ['data41', 'data42', 'data43'],
// }

// for (let key in data) {
//       for (let elem of data[key]) {
//             console.log(elem)
//       }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ]

// for (let elem of data) {
//       for (let key in elem) {
//             console.log(elem[key])
//       }
// }

// let data = [
// 	{
// 		1: ['data111', 'data112', 'data113'],
// 		2: ['data121', 'data122', 'data123'],
// 	},
// 	{
// 		1: ['data211', 'data212', 'data213'],
// 		2: ['data221', 'data222', 'data223'],
// 	},
// 	{
// 		1: ['data411', 'data412', 'data413'],
// 		2: ['data421', 'data422', 'data423'],
// 	},
// ]

// for (let obj of data) {
//       for (let key in obj) {
//             for (let elem of obj[key]) {
//                   console.log(elem)
//             }
//       }
// }

// 180

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ]

// // for (let employee of employees) {
// //       console.log(employee.name + '-' + employee.salary)
// // }

// let res = 0
// for (let employee of employees) {
//       res += employee.salary
// }
// console.log(res)

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ]

// let res = 0
// for (let employee of employees) {
//       if (employee.age >= 30) {
//             res += employee.salary
//       }
// }
// console.log(res)

// 181

// let months = {
// 	ru: [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	en: [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// }
// let lang = 'ru'
// let month = 5

// console.log(months[lang][month])

// let affairs = {
// 	2018: {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	2019: {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		},
// 	},
// }
// let year = 2018
// let month = 12
// let day = 31

// console.log(affairs[year][month][day][1])

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2'
// let key2 = 'key4'
// // console.log(obj[key1][key2])
// // console.log(obj[key1][key2])
// // console.log(obj[key1][key2])
// console.log(obj[key1]['key4'])

// 182

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ]

// employees.push({
// 	name: 'name4',
// 	salary: 1000,
// 	age: 17,
// })
// console.log(employees)

// 183

// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }

// affairs['2019-12-29'].push('data24')
// affairs['2019-12-31'] = []
// affairs['2019-12-31'].push('data41', 'data42')
// console.log(affairs)

// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// }

// students.group1.subgroup11.push('student114')
// students.group1.subgroup13 = ['student131', 'student132', 'student133']
// students.group4 = {}
// students.group4.subgroup41 = []
// students.group4.subgroup41.push('student141', 'student142')

// console.log(students)

// 184

// console.log(2 ** 10)
// console.log(Math.sqrt(245))
// let arr = [4, 2, 5, 19, 13, 0, 10]
// let res = 0

// for (let elem of arr) {
// 	res += elem ** 3
// 	console.log(res)
// }
// console.log(Math.sqrt(res))

// 185

// console.log((Math.sqrt(379).toPrecision(4)))

// let floor = Math.floor(Math.sqrt(587))
// let ceil = Math.ceil(Math.sqrt(587))
// let obj = {
// 	floor,
// 	ceil
// }
// console.log(obj)

// 186

// console.log(Math.min(4, -2, 5, 19, -130, 0, 10))
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10))

// 187

// function randInt(min, max) {
//       return Math.floor(Math.random() *(max - min + 1) + min)
// }
// // console.log(randInt(1, 100))

// let arr = []
// for (let i = 0; i < 10; i++) {
//       arr.push(randInt(1, 100))
// }
// console.log(arr)

// 188

// let a = 12
// let b = 15

// console.log(Math.abs(a - b))

// 189

// let str = 'js'
// console.log(str.toUpperCase())
// str = 'JS'
// console.log(str.toLowerCase())

// 190

// let str = 'я учу javascript!'

// console.log(str.substring(2, 5), str.slice(6, -1))

// 191

// let str = 'https://google.html'
// console.log(str.startsWith('https://'), str.endsWith('html'))

// 192

// let str = '1-2-3-4-5'

// while (str.includes('-')) {
//       str = str.replace('-', '.')
// }

// console.log(str)

// 193

// // let str = '1-2-3-4-5'
// // console.log(str.split('-'))
// // let str = '12345'
// // console.log(str.split(''))
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.join('-'))

// 194

// let arr = [1, 2, 3]
// // console.log(arr[0])
// console.log(arr[2])
// arr.push(4, 5, 6)
// arr.unshift(4, 5 ,6)
// console.log(arr)

// 195

// let arr = [1, 2, 3, 4, 5]
// arr = arr.slice(0, 3)
// console.log(arr)

// 196

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// arr.splice(3,0, 'a', 'b', 'c')
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,4, 'a', 'b', 2, 3 ,4, 'c', 5, 'e')
// console.log(arr)

// 197

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.includes(3))

// 198

// let obj = { a: 1, b: 2, c: 3 }

// console.log(Object.keys(obj))

// 199

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += +digit
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += +digit
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += Number(digit)
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += Number(digit)
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let prod = 1
// for (let digit of arr) {
// 	prod *= digit
// }

// console.log(prod)

// 200

// function namee() {
//       console.log('Denis')
// }
// namee()

// function counter() {
//       let count = 0
//       for (let i = 1; i <= 100; i++) {
//             count += i
//       }
//       console.log(count)
// }
// counter()

// 201

// function cubeOfNum(num) {
//       console.log(num ** 3)
// }
// cubeOfNum(5)

// function isPositive(num) {
//       if (num > 0) {
//             console.log('+++')
//       } else {
//             console.log('---')
//       }
// }
// isPositive(5)

// 202

// function sum(num1, num2, num3) {
//       console.log(num1 + num2 + num3)
// }

// sum(2, 5, 7)

// 203

// let param1 = 1
// let param2 = 2
// let param3 = 3

// function func(num1, num2, num3) {
//       console.log(num1 + num2 + num3)
// }

// func(param1, param2, param3)

// 205

// function cube(num) {
//       return num ** 3
// }

// let res = cube(3)
// console.log(res)

// function sqrt(num) {
//       return Math.sqrt(num)
// }

// console.log(sqrt(3) + sqrt(4))

// 206

// function sqrt(num) {
// 	return Math.sqrt(num)
// }

// function round(num) {
// 	return num.toFixed(3)
// }

// console.log(round(sqrt(2)))

// function sqrt(num) {
// 	return Math.sqrt(num)
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3
// }

// function round(num) {
// 	return num.toFixed(3)
// }

// let res = round(sum(sqrt(2), sqrt(3), sqrt(4)))
// console.log(res)

// 208

// function func(num) {
// 	let sum = 0

// 	for (let i = 1; i <= num; i++) {
// 		sum += i
// 	}
//       return sum
// }

// console.log(func(5))

// 209

// function divide(num) {
//       let count = 0
//       while (num >= 10) {
//             num /= 2
//             count++
//       }
//       return count
// }

// console.log(divide(25))

// 210

// function func(num1, num2) {

// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2
// 	} else {
// 		return num1 - num2
// 	}
// }

// console.log(func(-3, 4))

// 211

// function isEven(arr) {
//       for (let elem of arr) {
//             if (elem % 2 === 1) {
//                   return false
//             }
//       }
//       return true
// }
// console.log(isEven([2, 4, 5]))

// function isEvenNum(num) {
//       num = String(num)
//       for (let i = 0; i <= num.length; i++) {
//             if (num[i] % 2 === 1) {
//                   return false
//             }
//       }
//       return true
// }
// console.log(isEvenNum(221))

// function isTheSame(arr) {
//       for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === arr[i + 1]) {
//                   return true
//             }
//       }
//       return false
// }

// console.log(isTheSame([1,4,2,4,]))

// 212

// function func(a, b) {
//       return a == b;
// }

// function func(a, b) {
//       return a != b
// }

// function func(a, b) {
// 	return a + b >= 10
// }

// function func(num) {
// 	return num >= 0
// }

// 213

// function sum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}

// 	return res
// }
// console.log(sum([1,2,3,4,5]))

// function func(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}
//       return res
// }
// console.log(func([1,2,3,4,5]) / func([3,4,5,6,7]))

// function getSum(arr) {
// 	let res = 1

// 	for (let elem of arr) {
// 		res *= elem
// 	}

// 	return res
// }

// 214

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2());

// function sum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}
//       return res
// }

// console.log(sum([1, 2, 3, 4, 5]))

// let arr = [1, 2, 3, 4, 5]

// function func(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}

// 	console.log(res)
// }
// func(arr)

// function func1() {
// 	return 3
// }
// function func2() {
// 	return 5
// }

// console.log(func1() + func2())

// let sum1 = sum([1, 2, 3, 4, 5])
// console.log(sum1)

// function sum(arr) {
// 	let sum = 0

// 	for (let elem of arr) {
// 		sum += elem
// 	}

// 	return sum
// }

// let res = sum([1, 2, 3, 4, 5])
// console.log(res)

// function sum(arr) {
// 	let sum = 0

// 	for (let elem of arr) {
// 		sum += elem
// 	}
//       return sum
// }

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num
// 	} else {
//             return num
//       }
// }
// console.log(add(9))

// let arr = [1, 2, 3, 4, 5]

// console.log(sum(arr))

// function sum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}

// 	return res
// }

// let num = 12345
// let res = getDigitsSum(num)
// console.log(res)

// function getDigitsSum(num) {
// 	let arr = String(num).split('')
// 	let sum = 0

// 	for (let elem of arr) {
// 		sum += +elem
// 	}

// 	return sum
// }

// console.log(isPrime(13)) // должен вывести true

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false
// 		} else {
// 			return true
// 		}
// 	}
// }

// 215

// function sum(arr) {
//       let sum = 0
//       for (let elem of arr) {
//             sum += elem
//       console.log(sum)
//       }
// }

// function divide(num) {
//       let res = []
//       for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                   res.push(i)
//             }
//       }
//       console.log(res)
// }

// function symbols(str) {
//       str = str.split('')
//       return str
// }

// function reverseStr(str) {
//       let newStr = symbols(str)
//       let res = []
//       for (let i = str.length - 1; i >= 0; i--) {
//             res.push(newStr[i])
//       }
//       return res.join('')
// }

// function toCapital(str) {
//       let newStr = symbols(str)
//       let first = str[0].toUpperCase()
//       newStr.shift()
//       newStr.unshift(first)
//       return newStr.join('')
// }

// function arrOfNum(num) {
//       let arr = []
//       for (let i = 1; i <= num; i++) {
//             arr.push(i)
//       }
//       return arr
// }

// function sumOfNum(num) {
//       let str = String(num)
//       let res = 0
//       for (let i = 0; i < str.length; i++) {
//             res += +str[i]
//       }
//       return res
// }

// function isLeap(year) {
//       if (year % 4 === 0) {
//             return true
//       } else {
//             return false
//       }
// }

// function secsToDays(num) {
//       return num / 86400
// }

// function randomElem(arr) {
//       let max = arr.length - 1
//       let min = 0
//       let random = Math.floor(min + Math.random() * (max - min + 1))
//       return arr[random]
// }

// function isPrime(num) {
//       for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                   return false
//             }
//       } return true
// }

// function func(arr) {
// 	let newArr = arr
// 	newArr[0] = '!'
// }

// let arr = [1, 2, 3]
// func(arr)
// console.log(arr)

// 223

// function func() {
// 	return '!'
// }

// console.log(func)

// 224

// function func() {
//       return 'kek'
// }

// console.log(func())
// func = 123
// console.log(func)

// 225

// function func1() {
//       return 3
// }

// let func2 = func1

// console.log(func1(), func2())

// 226

// let func1 = function() {
//       return 1
// }

// let func2 = function() {
//       return 2
// }

// console.log(func1() + func2())

// 230

// let func1 = function () {
// 	console.log('!')
// };
// let func2 = function () {
// 	console.log('!')
// };
// function func3() {
// 	console.log('!')
// }

// 234

// test()
// let test = function func() {
// 	console.log('!')
// } // function expression

// func()
// console.log(function func() {
// 	console.log('!')
// }) // function expression

// func()
// +function func() {
// 	console.log('!');
// } // function expression

// func()
// function func() {
// 	console.log('!')
// } // function declaration

// 237

// let arr = [
// 	function () {
// 		return 1
// 	},
// 	function () {
// 		return 2
// 	},
// 	function () {
// 		return 3
// 	}
// ]

// // console.log(arr[2]())
// // console.log(arr[0]() + arr[1]() + arr[2]())

// for (let func of arr) {
// 	console.log(func())
// }

// 238

// let obj = {
// 	func1: function() { return 1 },
// 	func2: function() { return 2 },
// 	func3: function() { return 3 }
// }

// console.log(obj.func1() + obj.func2() + obj.func3())

// for (let func in obj) {
// 	console.log(obj[func]())
// }

// 239

// let obj = {
// 	sum: function (arr) {
// 		let sum = 0
// 		for (let elem of arr) {
// 			sum += elem
// 		}
// 	return sum
// 	},
// 	sumOfSquare: function (arr) {
// 		let sum = 0
// 		for (let elem of arr) {
// 			elem **= 2
// 			sum += elem
// 		}
// 	return sum
// 	},
// 	sumOfCube: function (arr) {
// 		let sum = 0
// 		for (let elem of arr) {
// 			elem **= 3
// 			sum += elem
// 		}
// 	return sum
// 	}
// }
// console.log(obj.sumOfCube([2,3]))

// 240
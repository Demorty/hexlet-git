'use strict' // Строгий режим

// let num1 = 30
// let num2 = 20

// if (num1 >= num2) {
//       while (num1 >= num2) {
//           if (num1 % 3 == 0) {
//           console.log(num1);
//           num1 -= 3;
//           } else {
//                num1++;
//           }
//       }
// } else if (num1 < num2) {

//       while (num1 < num2) {
//             if (num1 % 3 == 0) {
//                   console.log(num1)
//                   num1 += 3
//             } else {
//                   num1++
//                }
// }
// }

// if (num1 >= num2) {
// 	while (num1 >= num2) {
// 		if (num1 % 3 == 0) {
// 			console.log(num1)
// 			num1 -= 3
// 		} else {
// 			num1++
// 		}
// 	}
// } else if (num1 <= num2) {
// 	while (num1 <= num2) {
// 		if (num1 % 3 == 0) {
// 			console.log(num1)
// 			num1 += 3
// 		} else {
// 			num1++
// 		}
// 	}
// }


// let N = 3
// let  i = 0
// while (i == 0) {
// 	console.log(2 ** N)
//   i++
// }

// let num = 2
// let counter = 0
// while (num < 1000) {
//   num *= 2
//   counter++
// }

// console.log(`Итоговое число: ${num}\nКоличество итераций: ${counter}`)
// console.log(Math.floor(Math.random() * 11))

// let name = 'Disyun'

// console.log(name[name.length - 1])
// const text = 'When you play the game, you win even if you don\'t want to win.'

// // BEGIN (write your solution here)
// console.log(text.slice(5, 13).replace('you', 'someone'))

// function sayhello() {
//   console.log('12w1')
// }
// sayhello()
// const truncate = (text, length) => {
//   // BEGIN (write your solution here)
//   console.log(text.slice(0, length) + '...')
  
// }
// truncate('текст', 3)


// function getHiddenCard(text, num = 4) {
// 	let result = '*'.repeat(num) + text.slice(-5, text.length)
//   console.log(result)
// 	return result
// }

// getHiddenCard('1234567890')


// function capitalize(str) {
// 	let sliced = str.slice(0,1)
// 	let capitalized = sliced.toUpperCase()
//   console.log(str.replace(sliced, capitalized))
// 	return str.replace(sliced, capitalized)
  
// }
// capitalize('привет')

// let num1 = 5
// let num2 = 2
// let operator = '+'
// let result

// function calculator(num1, num2, operator) {
// 	if (operator === '+') {
// 		result = num1 + num2
// 	} else if (operator === '-') {
// 		result = num1 - num2
// 	} else if ((operator === '*')) {
// 		result = num1 * num2
// 	} else if ((operator === '/')) {
// 		result = num1 / num2
// 	} else {
// 		console.log('Неверный оператор')
//     return
// 	}
// 	console.log(result)
// }

// calculator(2,5,'+')


// let side1 = +prompt()
// let side2 = +prompt()
// let side3 = +prompt()

// function checkTriangleExistence(num1, num2, num3) {
// 	if (num1 < num2 + num3 && num2 < num1 + num3 && num3 < num1 + num2) {
// 		return 'Треугольник существует'
// 	} else {
// 		return 'Треугольник не существует'
// 	}
// }

// console.log(checkTriangleExistence(9, 3, 5))


// let a = 2
// let isEven = a => (a / 2) == 0

// console.log(isEven(a))



// let bankAccount = {
// 	balance: 500,

// 	deposit: function (amount) {
// 		bankAccount.balance += amount
// 	},

// 	withdraw: function (amount) {
// 		bankAccount.balance -= amount
// 	},
// }

// const amount = 500
// const choice = 'внести'
// if (choice === 'внести') {
// 	bankAccount.deposit(amount)
// } else if (choice === 'снять') {
// 	bankAccount.withdraw(amount)
// }



// const dates = ['25.10.1917', '22.06.1941', '09.05.1945', '26.12.1991']

// const years = dates.map(function (date) {
// 	const parts = date.split('.')
// 	return parts[2]
// })

// console.log(years.join(', '))



// let arr = ('do a barrel roll').split(' ')
// let newArr = arr.map(elem => elem.toUpperCase())
// console.log(arr)


// console.log(arr)




// if (cities.includes(search)) {
// 	console.log(
// 		cities.map(
// 			city => `Города, начинающиеся с буквы "${first}": ${city[first]}`
// 		)
// 	)
// } else {
// 	console.log('Такого города нет в списке')
// }



// function isLeapYear(year) {
// 	console.log( year % 4 === 0 && year % 100 !== 0)
// }
// isLeapYear(2016)


// function joinNumbersFromRange(start, finish) {
//         let str = ''
// 	while (start <= finish) {
// 		let i = start
		
// 		str += String(i)
// 		start++
//                 console.log(str)
                
                
// 	}
//         return str
// }
// joinNumbersFromRange(1,5)


// function mySubstr(text, end) {
// 	let i = 0
// 	let result = ''
// 	while (i < end) {
// 		result += text[i]
//                 i++
// 	}
// 	return result
// }
// console.log(mySubstr('lelele', 5))



// function countChars(text, char) {
// 	let count = 0
// 	let i = 0
// 	while (i < text.length) {
// 		if (text[i].toUpperCase() === char) {
// 			count++
// 		}
// 		i++
// 	}
// 	return count
// }
// console.log(countChars('axa', 'a'))



// function makeItFunny(word, num) {
//   let str = ''
//   for (let i = 0; i < word.length; i++) {
//     if ((i + 1) % num === 0) {
//       str += word[i].toUpperCase()
//     } else {
//       str += word[i]
//     }
//   }
//   return str
// }
// console.log(makeItFunny('I never look back', 3))



// function encrypt(word) {
//   let newWord = ''
//   for (let i = 0; i < word.length - 1; i++) {
//       if (word.length % 2 === 0) {
      
//     }
//   }
//   return newWord
// }
// console.log(encrypt('move'))
/* Task 1 */
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(element => console.log(element));
fibonacci.forEach(function (item, index, fibonacci) {
	console.log(item)
})

/* Task 2 */
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
let count = 1
let members = []
users.map(userItem => {
	members.push(String('member ' + count + ': ' + userItem))
	count++
})
console.log(members)


const users2 = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
count = 1
members = []
users.map(function membersC(item) {
	members.push(String('member ' + count + ': ' + item))
	count++
})
console.log(members)

/* Task 3 */
const numbers = [7, -4, 32, -90, 54, 32, -21]
const filterdNumbers = numbers.filter(item => item >= 0)
console.log(filterdNumbers)

const numbers2 = [7, -4, 32, -90, 54, 32, -21]
const filterdNumbers2 = numbers.filter(function filer(item) {
	if (item >= 0) {
		return item;
	}
})
console.log(filterdNumbers2)

/* Task 4 */
const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
const startValue = 0
const sum = fibo.reduce((lastValue, currentValue) => lastValue + currentValue, startValue)
console.log(sum)


let sum2 = fibo.reduce(function (value, nextValue) {
	return value + nextValue
})
console.log(sum)

/* Task 5 */
const anotherNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
function check(anotherNumbers) {
	return anotherNumbers % 2 === 0
}
let foundNum = anotherNumbers.find(item => item % 2 === 0)
console.log(foundNum)
let foundNum2 = anotherNumbers.find(check)
console.log(foundNum2) 
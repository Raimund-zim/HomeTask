/* task 1 */

let machine = {
	weel: 4,
	motor: 1,
}
delete machine.motor
delete machine.weel
console.log(machine)

/* Task 2 */
let cat = {
	color: 'black',
	name: "falca",
}
console.log('color' in cat)
console.log('name' in cat)

/* Task 3 */
const student = {
	name: 'John',
	age: 19,
	isHappy: true
}
for (const key in student) {
	console.log(key)
}
for (const key in student) {
	console.log(student[key])
}

/* Task 4 */
const colors = {
	'ru pum pu ru rum': {
		red: 'красный',
		green: 'зеленый',
		blue: 'синий'
	},
};
console.log(colors["ru pum pu ru rum"].red + ' и ' + colors["ru pum pu ru rum"].blue)

/* Task 5 */
let salaries = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	andrey2: 664,
	alexandra: 199
}

let sum_sal = 0
workers = 0
for (const key in salaries) {
	sum_sal = sum_sal + salaries[key]
	workers++
}

let median = sum_sal / workers
console.log('Средняя зарплата сотрудников: ' + median + ' рупий')

/* Task 6 */
let userInfo = {
	userName: 'Raimund',
	userPassword: 'qwerty',
}
let userInfoToConfirm = {
	userName: 'Raimund',
	userPassword: 'qwerty',
}
if (JSON.stringify(userInfo) === JSON.stringify(userInfoToConfirm)) {
	console.log('Добро пожаловать')
}

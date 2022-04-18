let userNum = 100;
let getSum = function getSum() {
	let summ = 0
	for (let index = 0; index < userNum + 1; index++) {
		summ = index + summ;

	}
	return summ
}
console.log(getSum())

let overcost = (moneyNeed) => {
	let calulate = moneyNeed * 0.17 * 5;
	return calulate;
}
console.log(overcost(100))

let trimString = (stringMassage, start, stop) => {
	let stringArray = stringMassage.split('')
	let stringArray2 = stringArray.slice(start, stop)
	return stringArray2.join('')
}
console.log(trimString('Я бы хотел обрезать эту строку', 2, 29))

let getSumNumbers = (someNumber) => {

	const someNumberArr = Array.from(someNumber.toString(), Number)
	let sum = 0;
	for (let index = 0; index < someNumberArr.length; index++) {
		sum = sum + someNumberArr[index]
	}
	return sum
}
console.log(getSumNumbers(5060))

let getAnotherSum = (oneNumber, twoNumber) => {
	numSum = oneNumber
	if (oneNumber === twoNumber) {
		return oneNumber + ' Since both are same'
	}
	else {
		while (oneNumber < twoNumber) {
			oneNumber += 1
			numSum += oneNumber
		}
		return numSum
	}

}
console.log(getAnotherSum(-1, 0))
function foo() {
	return 'foo'
}
function boo() {
	return 'boo'
}

let fooboofunc = (bolType, foo, boo) => {
	if (bolType === true) {
		return foo
	} else {
		return boo
	}
}
console.log(fooboofunc(false, foo(), boo()))
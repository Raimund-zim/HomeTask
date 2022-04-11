/* HomeWork16 */
/* task1 */
let var1 = 'true';
let var2 = false;
let var3 = 17;
let var4 = undefined;
let var5 = null;
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);

/* task2 */
let height = 15;
let width = 20;
if (height > width) {
	console.log(height);
} else {
	console.log(width);
}

/* task3 */

for (let i = 1; i <= 20; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

/* task4 */
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = null
if (key === true && documents === true && pen === true) {
	if (apple === true || orange === true) {
		shouldGoToWork = 'Я могу идти на работу';
	} else {
		shouldGoToWork = 'Я не могу идти на работу. Я не все взял';
	}
} else {
	shouldGoToWork = 'Я не могу идти на работу. Я не все взял';
}
console.log(shouldGoToWork);

/* task5 */
let userNumber = null;
/* userNumber = prompt('Введите число'); */
if (userNumber % 15 === 0) {
	console.log('FizBuz');
} else if (userNumber % 5 === 0) {
	console.log('Fiz');
} else if (userNumber % 3 === 0) {
	console.log('Buz');
}

/* task6 */
let userAge = Number(prompt('Сколько тебе лет?'))
if (userAge > 18) {
	console.log('Попей пивка')
} else if (userAge < 16) {
	console.log('Пей колу')
} else {
	console.log(`Можешь выкурить сигаретку, только маме не говори`)
}

/* task7 */
/* travel()
function travel() {
	let wayToRide = prompt('В какую сторону света вы хотели бы отправиться?');
	switch (wayToRide) {
		case 'юг':
			console.log('на юг пойдешь счастье найдешь')
			break;
		case 'север':
			console.log('на север пойдешь много денег найдешь')
			break;
		case 'запад':
			console.log('на запад пойдешь верного друга найдешь')
			break;
		case 'восток':
			console.log('на восток пойдешь разработчиком станешь')
			break;

		default:
			alert('Неверное указана сторона света. Попробуйте еще раз')
			travel();
			break;
	}
} */

/* advanced task1 */
let name1 = 'пОлИнА нАбЕрЕжНаЯ'
name1 = name1.toLowerCase()
let nameArr = name1.split(' ');
for (let index = 0; index < nameArr.length; index++) {
	nameArr[index] = nameArr[index].charAt(0).toUpperCase() + nameArr[index].slice(1)

}
console.log('Приветствую тебя, ' + nameArr.join(' ') + '.');

/* advanced task2 */
let point1 = Number(prompt('Укажи число'))
let point2 = Number(prompt('Сколько отнять?'))
let point3 = Number(prompt('Сколько прибавить?'))
let point4 = Number(prompt('На сколько умножить?'))
let point5 = Number(prompt('На сколько разделить??'))
let answer = (((point1 - point2) + point3) * point4) / point5;
alert('(((' + point1 + ' - ' + point2 + ' ) ' + '+ ' + point3 + ') ' + '* ' + point4 + ') / ' + point5 + ' = ' + answer)
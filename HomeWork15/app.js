/* task1 */
let x = 20;
let y = 58;
let z = 42;
console.log('Task1');
console.log(`${x + y + z}`);

/* task2 */
let secondsPerMinute = 60;
let minutesPerHour = 60;
let hoursPerDay = 24;
let daysPerYear = 365;
let myAge = 28;
let myAgeInSeconds = myAge * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
console.log('Task2');
console.log(myAgeInSeconds);

/* task3 */
let count = 42;
let userName = '42';
count = String(count);
console.log(typeof count + ' ' + count);
userName = Number(userName);
console.log(typeof userName + ' ' + userName);

/* task3.2 */
let count2 = count.toString();
count = count2
console.log(typeof count + ' ' + count);
let userName2 = parseInt(userName);
userName = userName2;
console.log(typeof userName + ' ' + userName);

/* task4 */
let a = 1;
let b = 2;
let c = "белых медведей";
b = String(b) + ' ';
console.log(a + b + c);

/* task5 */
let word1 = 'доступ'
let word2 = 'морпех'
let word3 = 'наледь'
let word4 = 'попрек'
let word5 = 'рубило'
console.log(word1.length);
console.log(word2.length);
console.log(word3.length);
console.log(word4.length);
console.log(word5.length);

/* task6 */
let strVar = "String";
let numVar = 5;
let boolVar = true;
console.log('Variable: strVar have type: ' + typeof strVar);
console.log('Variable: numVar have type: ' + typeof numVar);
console.log('Variable: boolVar have type: ' + typeof boolVar);

/* task7 */
/* let yourName = prompt('Укажите ваше имя');
let yourAge = prompt('Укажите ваш возраст');
console.log('User name: ' + yourName);
console.log('User age: ' + yourAge); */

/* advanced task1 */
let first = 4;
let second = 3;
first = first + second;
second = first - second;
first = first - second;

console.log(first);
console.log(second);

/* advanced task2 */
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let chiper = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
console.log(chiper)
/* Task 1 */
const colors = ['red', 'green', 'blue']
console.log(colors.length);

/* Task 2 */
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]);

/* Task 3 */
const numbers = [5, 43, 63, 23, 90]
numbers.splice(0)
console.log(numbers)

numbers2 = [5, 43, 63, 23, 90]
while (numbers2.length > 0) {
	numbers2.shift()
}
console.log(numbers2)

/* Task 4 */
const students = ['Polina', 'Dasha', 'Masha']
students.splice(students.lastIndexOf(), 1, 'Borya')
students.splice(0, 1, 'Andrey')
console.log(students)


/* Task 5 */
const cats = ['Gachito', 'Tom', 'Batman']
for (let index = 0; index < cats.length; index++) {
	console.log(cats[index])
}
for (const cat of cats) {
	console.log(cat)
}

/* Task 6 */
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newArray = evenNumbers.concat(oddNumbers)
console.log(newArray)
console.log(newArray.indexOf(8, 0))

/* Task 7 */
const binary = [0, 0, 0, 0]
for (let index = 0; index < binary.length; index++) {
	if (index % 2 != 0) {
		binary.splice(index, 0, 1)
	}

}
console.log(binary)
// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage() {}

const isAdmin = false
const isVerifiedUser = false
const hasSpecialPermission = true
const hasTemporaryPass = true

let isAccess

if ((isVerifiedUser != false) && (hasSpecialPermission != false || hasTemporaryPass != false)) {
	isAccess = true
} else if (isAdmin == true) {
	isAccess = true
} else {
	isAccess = false
}
	_______________________

	const score = 93 // тестовое значение, можно изменять
let grade
if (0 <= score && score <= 49){
	grade = 'F'
} else if (50 <= score && score <= 69){
	grade = 'D'
} else if (70 <= score && score <= 79){
	grade = 'C'
} else if (80 <= score && score <= 89){
	grade = 'B'
} else {
	grade = 'A'
}

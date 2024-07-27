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

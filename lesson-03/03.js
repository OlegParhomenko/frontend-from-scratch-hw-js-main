// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(numberOne, numberTwo, numberThree) {
	if (numberOne > numberTwo && numberOne > numberThree) {
    	return numberOne
	} else if (numberTwo > numberOne && numberTwo > numberThree) {
    	return numberTwo
	} else {
    	return numberThree
	}
}

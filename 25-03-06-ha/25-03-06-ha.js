// jshero 

// 31. Modulo
// Another arithmetic operator is modulo. 
// It calculates the remainder of a division and is represented by %.
// Write a function onesDigit that takes a natural number and returns the ones digit of that number.
function onesDigit(number) {
    return number % 10;
}
console.log(onesDigit(2674))

// 32. Parentheses
// Write a function mean that takes 2 numbers and returns their mean value.
function mean(x, y) {
    return (x + y) / 2;
}
console.log(mean(1, 2))

// 33. Math
// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
// The length of the two legs is passed to the function.
function hypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log(hypotenuse(3, 4)) 
// or
function hypotenuse2(a, b) {
    let aPow2 = Math.pow(a, 2);
    let bPow2 = Math.pow(b, 2);
    let cPow2 = aPow2 + bPow2;
    let c = Math.sqrt(cPow2);
    return c;
}
console.log(hypotenuse2(3, 4)) 

// 34. min and max
// Write a function midrange, that calculates the midrange of 3 numbers.
// The midrange is the mean of the smallest and largest number.
function midrange(x, y, z) {
    let min = Math.min(x, y, z);
    let max = Math.max(x, y, z);
    return (min + max) / 2;
}
console.log(midrange(3, 9, 1))

// 35. Math.PI
// Write a function area that calculates the area of a circle. 
// The function is given the radius of the circle.
function area(r) {
    let rPow2 = Math.pow(r, 2);
    return rPow2 * Math.PI;
}
console.log(area(1))
console.log(area(2))

//36. Rounding
let a = Math.round(5.49); // = 5
let b = Math.round(4.5); // = 5
let c = Math.floor(5.99); // = 5
let d = Math.ceil(4.01); // = 5
console.log(a)
console.log(b)
console.log(c)
console.log(d)
// Write a function round100 that rounds a number to the nearest hundred.
function round100(number) {
    let hundredth = number / 100;
    let roundHundredth = Math.round(hundredth);
    return roundHundredth * 100;
}
console.log(round100(1749))
console.log(round100(856.12))
// or
function roundHundred(number) {
    return Math.round(number / 100) * 100;
}
console.log(roundHundred(1749))
console.log(roundHundred(856.12))

// 37. random numbers
// Math.random() returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
// Write a function dice that returns like a dice a random number between 1 and 6.
function dice() {
    let x = 6 * Math.random();
    return Math.ceil(x);
}
console.log(dice())

// 38. parseInt()
let nr = parseInt('19', 10); // = 19
// Write a function add that takes a string with a summation task and returns its result as a number. 
// Two natural numbers should be added.
function add(string) {
    let firstNumber = parseInt(string, 10);
    let indexPlus = string.indexOf('+'); // indexOf !!
    let secondString = string.substr(indexPlus + 1); // substring !!
    let secondNumber = parseInt(secondString, 10);
    return firstNumber + secondNumber
}
console.log(add('102+17'))

// 39. Boolean NAND
// Write a function nand that takes two Boolean values. 
// If both values are true, the result should be false. 
// In the other cases the return should be true.
function nand(x, y) {
    let and = x && y;
    return !and;
}
console.log(nand(true, true))
console.log(nand(true, false))
console.log(nand(false, true))
console.log(nand(false, false))

// 40. NOR
function nor(x, y) {
    let or = x || y;
    return !or;
}
console.log(nor(true, true))
console.log(nor(true, false))
console.log(nor(false, true))
console.log(nor(false, false))

// 42. XOR
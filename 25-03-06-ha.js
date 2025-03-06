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
// oder
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
let a = Math.round(5.49);
let b = Math.round(4.5);
let c = Math.floor(5.99);
let d = Math.ceil(4.01);
console.log(a)
console.log(b)
console.log(c)
console.log(d)
// 
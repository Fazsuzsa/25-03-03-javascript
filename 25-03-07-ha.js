// find() method
// Returns the value of the first element in an array that pass a test

const RANDOMNUMBERS = [{nr: 8}, {nr: 4}, {nr: 5}, {nr: 4}];
const CURRENTITEM = RANDOMNUMBERS.find((item) => item.nr === 4);
console.log("Current item:", CURRENTITEM);

// filter() method
// Creates a new array with every element in an array that pass a test

const ages = [16, 18, 20, 32];
const adult = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(adult)

// concat() method
// Joins arrays and returns an array with the joined arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias"];
const arr3 = ["Robin", "Linus"];
const children2 = arr1.concat(arr2);
const children3 = arr1.concat(arr2, arr3);
console.log(children2)
console.log(children3)

// flat() method
// Concatenates sub-array elements

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr2 = myArr2.flat(2);
console.log(newArr2)

// forEach() method
// Calls a function for each array element

// ??

// indexOf() method
// Search the array for an element and returns its position

const fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index)
let index2 = fruits.indexOf("Apple", 3);
console.log(index2)



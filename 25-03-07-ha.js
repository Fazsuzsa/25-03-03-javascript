// find()
// Returns the value of the first element in an array that pass a test

const RANDOMNUMBERS = [{nr: 8}, {nr: 4}, {nr: 5}, {nr: 4}];
const CURRENTITEM = RANDOMNUMBERS.find((item) => item.nr === 4);
console.log("Current item:", CURRENTITEM);

// findIndex()
// Returns the index of the first element in an array that pass a test

// findLast()
// Returns the value of the last element in an array that pass a test

// findLastIndex()
// Returns the index of the last element in an array that pass a test

// filter()
// Creates a new array with every element in an array that pass a test

const ages = [16, 18, 20, 32];
const adult = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(adult)

// concat()
// Joins arrays and returns an array with the joined arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias"];
const arr3 = ["Robin", "Linus"];
const children2 = arr1.concat(arr2);
const children3 = arr1.concat(arr2, arr3);
console.log(children2)
console.log(children3)

// flat()
// Concatenates sub-array elements

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr2 = myArr2.flat(2);
console.log(newArr2)

// forEach()
// Calls a function for each array element

// includes()
// Check if an array contains the specified element

// indexOf()
// Search the array for an element and returns its position


const fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index)
let index2 = fruits.indexOf("Apple", 3);
console.log(index2)

// join()
// Joins all elements of an array into a string

// length
// Sets or returns the number of elements in an array

// map()
// Creates a new array with the result of calling a function for each array element

// pop()
// Removes the last element of an array, and returns that element

// push()
// Adds new elements to the end of an array, and returns the new length

// reduce()
// Reduce the values of an array to a single value (going left-to-right)

// slice()
// Selects a part of an array, and returns the new array

// sort()
// Sorts the elements of an array

// splice()
// 	Adds or Removes array elements

// toString()
// Adds or Removes array elements
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

const arr1 = ["Panni", "Matyi", "Imre"];
const arr2 = ["Eszter"];
const arr3 = ["Zsuzsa", "Lacika"];
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

// indexOf()
// Search the array for an element and returns its position

const fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index)
let index2 = fruits.indexOf("Apple", 3);
console.log(index2)

// join()
// Joins all elements of an array into a string
const musikanten = ["Esel", "Hund", "Katze", "Hahn"]
let bremer1 = musikanten.join();
let bremer2 = musikanten.join(' und ');
console.log(bremer1)
console.log(bremer2)

// length
// Sets or returns the number of elements in an array

const obst = ["Banane", "Orange", "Appfel", "Mango"];
let laenge = obst.length;
console.log(laenge);

// map()
// Creates a new array with the result of calling a function for each array element

// pop()
// Removes the last element of an array, and returns that element

const anwesend = ["Alexander", "Christof", "Dennis", "Domske"];
let removedElement = anwesend.pop();
console.log(removedElement);

// push()
// Adds new elements to the end of an array, and returns the new length

const languages = ["Hungarian", "German", "English"];
let languages2025 = languages.push("Spanish");
console.log(languages2025); // = 4

// reduce()
// Reduce the values of an array to a single value (going left-to-right)

const zahlen = [1, 2, 3, 4, 5];

const summe = zahlen.reduce((acc, zahl) => acc + zahl, 0);

console.log(summe)

// slice()
// Selects a part of an array, and returns the new array

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "x", "y", "z"];
let hij = alphabet.slice(7, 10);
let tux = alphabet.slice(-5, -2);
console.log(hij);
console.log(tux);

// sort()
// Sorts the elements of an array

const einkaufliste = ["Shampoo", "Apfelsaft", "Tee", "Katzenfutter"]
let alphabetical = einkaufliste.sort();
console.log(alphabetical);

const preise = [4.99, 5.33, 5.99, 1.99]
let ascending = preise.sort();
console.log(ascending);
console.log(preise); // the sort() method overwrites the original array


// splice()
// 	Adds or Removes array elements

const einkauf = ["Apfelsaft", "Katzenstreu", "Tee"];
let einkauf2 = einkauf.splice(1, 0, "Shampoo", "Kichererbsen"); // Inserts at index 1
console.log(einkauf);
let einkauf3 = einkauf.splice(3, 1, "Katzenfutter"); // Replaces 1 element at index 3
console.log(einkauf);

// toString()
// Converts an array to a string, and returns the result

const zutatenListe = ["Mehl", "Milch", "Wasser", "Eier"];
let zutatenString = zutatenListe.toString();
console.log(zutatenString);

// includes()
// Check if an array contains the specified element

const zutaten = ["Mehl", "Eier", "Milch", "Wasser"];
let allergen = zutaten.includes("Eier");
console.log(allergen); // true
let allergenPosition1 = zutaten.includes("Eier", 1);
console.log(allergenPosition1); // true
let allergenPosition2 = zutaten.includes("Eier", 2);
console.log(allergenPosition2); // false
let apfel = zutaten.includes("Apfel");
console.log(apfel); // false
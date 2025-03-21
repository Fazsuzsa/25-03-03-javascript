// toUpperCase, toLowerCase

let stadt = 'Prag';
let ausgabe = stadt.toUpperCase();

ausgabe = stadt.toLowerCase();

function toCase(text) {
    return text.toLowerCase() + '-' + text.toUpperCase()
}

// oder
function toCase(text) {
    let lower = text.toLowerCase();
    let upper = text.toUpperCase();
    let result = lower + '-' + upper;
    return result;
}

// indexOf()
let n1 = "Fred Feuerstein".indexOf("e", 2);
let n2 = "Fred Feuerstein".indexOf("e", 3);
let n3 = "Fred Feuerstein".indexOf("e", 7);
console.log(n1)
console.log(n2)
console.log(n3)

function secondIndexof(text, sequ) {
    let firstIndex = text.indexOf(sequ);
    let secondIndex = text.indexOf(sequ, firstIndex + 1);
    return secondIndex;
}
console.log(secondIndexof("nemigazmostmarhogynemlehetbekenhagyni", "gy"))

// replace()
let str = "Hello Zsuzsa!".replace("Zsuzsa", "Gitta")
console.log(str)
let lukas = "Lukas Probst".replace("b", "")
console.log(lukas)
let lukas2 = "Lukas Probst".replace("bst", "")
console.log(lukas2)

function convert(date) {
    date = date.replace("-", ".").replace("-",".");
    date = date.replace("/", ".").replace("/",".");
    return date;
}

console.log(convert("03-03-2025"))
console.log(convert("04/03/2025"))

// oder
function convertAll(date) {
    date = date.replaceAll("-", ".");
    date = date.replaceAll("/", ".");
    return date;
}

console.log(convertAll("03-03-2025"))
console.log(convertAll("04/03/2025"))
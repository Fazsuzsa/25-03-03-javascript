// Fallunterscheidungen
let myName = "Zsuzsa";
if (myName === "Lukas") {
    console.log("Herzlichen Glückwunsch!");
} else if (myName === "Tom") {
    console.log("Bis Morgen!");
} else {
    console.log("Wer bist du?");
}

let nr1 = 3;
let nr2 = 3;
if (nr1 > nr2) {
    console.log(`${nr1} ist größer als ${nr2}`);
} else if (nr1 = nr2) {
    console.log(`${nr1} ist klgleichals ${nr2}`);
} else {
    console.log("Die sind gleich");
}

let a = 3;
let b = 0;
let divisionResult = a / b;
if (b!=0) {
    console.log(divisionResult)
} else {
    console.error("Man kann nicht durch 0 teilen!")
}

let punkte = 75
if (punkte > 90) {
    console.log("Note 1");
} else if (punkte > 80) {
    console.log("Note 2");
} else if (punkte > 70) {
    console.log("Note 3");
} else if (punkte > 60) {
    console.log("Note 4");
} else {
    console.log("Durchgefallen!");
}

let fix = (0.1 + 0.2).toFixed(2);
console.log(fix)

console.log(1 === "1")


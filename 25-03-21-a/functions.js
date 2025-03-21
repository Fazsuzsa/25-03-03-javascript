//function vorstellung() {
//   console.log(`Ich bin ${firstName}.`);
//  console.log(`Ich komme aus ${city}.`);
//  console.log(`Ich bin ${age} Jahre alt.`);
//}

//let firstName = prompt("Wie heißt du?");
//let city = prompt("Woher kommst du?");
//let age = prompt("Wie alt bist du?");

//vorstellung();

function vorstellung(firstName, city, age) {
  console.log(
    `Ich bin ${firstName}. Ich komme aus ${city}. Ich bin ${age} Jahre alt.`
  );
}

// let userFirstName = prompt("Wie heißt du?");
// let userCity = prompt("Woher kommst du?");
// let userAge = prompt("Wie alt bist du?");

// vorstellung(userFirstName, userCity, userAge);

function addieren(a, b) {
  return a + b; // 1 Funktion kann 1* zurückgeben
}

let meinErgebnis = addieren(17, 34);

console.log(meinErgebnis);

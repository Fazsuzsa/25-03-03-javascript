// 1. let zufallszahl = Math.floor(Math.random() * 10) + 1; -> Damit könnt ihr bei jedem Neustart eine Zufallszahl zwischen 1 & 10 zufällig generiere lassen
// 2. Der Spieler muss die Zahl erraten.
// 3. Falls die Zahl zu hoch oder zu niedrig ist, bekommt der Spieler eine entsprechende Rückmeldung.
// 4. Falls die Zahl richtig ist, erscheint eine Glückwunsch-Nachricht.let name = prompt("Wie heißt du, tapferer Held?");

let number = parseInt(prompt("Enter a guess between 1 and 10:"));
let randomNumber = Math.floor(Math.random() * 10) + 1;

if (number === randomNumber) {
  alert("The guessed number is exactly right!");
} else if (number < randomNumber && number > 0) {
  alert(`${randomNumber} is the right number. The guessed number is too low!`);
} else if (number > randomNumber && number < 11) {
  alert(`${randomNumber} is the right number. The guessed number is too high!`);
} else {
  alert("Invalid number!");
}

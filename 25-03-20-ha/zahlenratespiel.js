// 1. let zufallszahl = Math.floor(Math.random() * 10) + 1; -> Damit könnt ihr bei jedem Neustart eine Zufallszahl zwischen 1 & 10 zufällig generiere lassen
// 2. Der Spieler muss die Zahl erraten.
// 3. Falls die Zahl zu hoch oder zu niedrig ist, bekommt der Spieler eine entsprechende Rückmeldung.
// 4. Falls die Zahl richtig ist, erscheint eine Glückwunsch-Nachricht.let name = prompt("Wie heißt du, tapferer Held?");

let zufallszahl = Math.floor(Math.random() * 10) + 1;
let versuch = 0;
let geraten = false;

while (!geraten) {
    let eingabe = prompt("Gib eine Zahl zwischen 1 und 10 ein:");
    let zahl = parseInt(eingabe);
    versuch++;

    if (zahl === zufallszahl) {
        alert(`Glückwunsch! Du hast die Zahl ${zufallszahl} in ${versuch} Versuchen erraten.`);
        geraten = true;
    } else if (zahl < zufallszahl) {
        alert("Die Zahl ist zu niedrig. Versuch es nochmal!");
    } else {
        alert("Die Zahl ist zu hoch. Versuch es nochmal!");
    }
}
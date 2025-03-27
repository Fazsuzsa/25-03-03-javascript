// console.log("Hallo Konsole");
// alert("Hallo wie gehst?");
// prompt("Wie heißt du edler Held?");

// NATIVE MODULE
// Beispiele:
const os = require("os"); // importiere uns os
// andere schreibweise ist möglich bei type: "module":
// import os from "os"

console.log(os.version());
console.log(os.uptime());

const fs = require("fs");

fs.writeFile("message.txt", "Hallo, ich komme aus der index.js", (err) => {
  if (err) throw err;
  console.log("Die Datei wurde gespeichert.");
});

// EXTERNAL MODULE
let generateName = require("sillyname");

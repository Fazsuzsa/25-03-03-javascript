const express = require("express");
const app = express();

const tiere = [
  { id: 1, name: "Bello", art: "Hund", alter: 3 },
  { id: 2, name: "Mieze", art: "Katze", alter: 5 },
];

app.get("/tiere", (req, res) => {
  res.json(tiere);
}); // Gibt eine Liste aller Tiere zurück

// app.get("/tiere/search", (req, res) => {
//   }); // Filtert nach einer Tierart (z. B. Hund, Katze)
//GET /tiere/:id // Gibt nur das Tier mit der angegebenen ID zurück
//POST /tiere // Fügt ein neues Tier zur Liste hinzu (über JSON-Body)

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});

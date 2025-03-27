const express = require("express");
const app = express();

const tiere = [
  { id: 1, name: "Bello", art: "Hund", alter: 3 },
  { id: 2, name: "Mieze", art: "Katze", alter: 5 },
];

app.get("/tiere", (req, res) => {
  res.json(tiere);
}); // Gibt eine Liste aller Tiere zurück

app.get("/tiere/search", (req, res) => {
  const art = req.query.art;
  const result = tiere.filter(
    (tier) => tier.art.toLowerCase() == art.toLowerCase()
  );
  res.json(result);
}); // Filtert nach einer Tierart (z. B. Hund, Katze)

app.get("/tiere/:id", (req, res) => {
  const id = req.params.id;
  const foundAnimal = tiere.find((tier) => tier.id == id);

  if (foundAnimal) {
    res.json(foundAnimal);
  } else {
    res.status(404).send(`Tier mit der ID ${id} nicht gefunden.`);
  }
}); // Gibt nur das Tier mit der angegebenen ID zurück

//POST /tiere // Fügt ein neues Tier zur Liste hinzu (über JSON-Body)

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});

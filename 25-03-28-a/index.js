const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json()); // unsere Milddleware, die uns ermöglicht ...

// Hilfsfunktion 1
function readFile() {
  const data = fs.readFileSync("tiere.json", "utf-8");
  return JSON.parse(data); // JSON.parse erstellt ein Javascript Object aus der JSON Datei
}
// Hilfsfunktion 2
function writeFile(data) {
  fs.writeFileSync("tiere.json", JSON.stringify(data, null, 2));
}

app.get("/tiere", (req, res) => {
  const tiere = readFile();
  res.json(tiere);
});

app.post("/tiere", (req, res) => {
  const tiere = readFile();
  const { name, art } = req.body;
  if (name && art) {
    const newTier = {
      id: tiere.legth + 1,
      name: name,
      art: art,
    };
    tiere.push(newTier);
    writeFile(tiere);
    req.statusCode(201).json(newTier);
  } else {
    res.send("Daten unvollständig!");
  }
});

app.put("/tiere/:id", (req, res) => {
  const id = req.params.id;
  const tiere = readFile(); // Datei aufrufen
  const newArt = req.body.art;
  const foundTier = tiere.find((tier) => tier.id == id);
  foundTier.art = newArt;
  res.json(foundTier);
  writeFile(tiere); // in Datei reinschreiben
});

app.delete("/tiere/:id", (req, res) => {
  const id = req.params.id;
  const tiere = readFile();
  const index = tiere.findIndex((tier) => tier.id == id);
  const entferntesTier = tiere.splice(index, 1); // 1 Tier wird gelöscht
  res.json("Erfolgreich gelöscht: " + entferntesTier[0].name);
  writeFile(tiere);
});

app.listen(3000);

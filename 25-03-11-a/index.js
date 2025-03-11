// ganz oben
import express from "express";
// import path from "path";
const app = express();

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/christof", (req, res) => {
    res.send("<h1>Veränderung!>/h1><p>Christof hat gefragt, was Routen machen!</p>");
});

// ganz unten
app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});
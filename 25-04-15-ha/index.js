const express = require("express");
const app = express();
// const sqlite3 = require("sqlite3");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER, // Dein PostgreSQL-Benutzername
  host: process.env.DB_HOST, // z. B. 'localhost'
  database: process.env.DB_NAME, // Name deiner Datenbank
  password: process.env.DB_PASSWORD, // Dein Passwort
  port: process.env.DB_PORT, // Standardport für PostgreSQL
});

// const db = new sqlite3.Database("tiere.db");

const createTable = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
    CREATE TABLE IF NOT EXISTS tiere (
    id INTEGER PRIMARY KEY,
    tierart VARCHAR(50),
    name VARCHAR(50),
    krankheit VARCHAR(100),
    age INT,
    gewicht REAL);
        `);
    console.log("✅ Table 'users' created!");
  } catch (err) {
    console.error("❌ Error creating table:", err);
  } finally {
    client.release();
  }
};

createTable();

app.use(express.json()); // Ermöglicht Express Json aus einem Body auszulesen
app.use(express.static("public"));

app.get("/tiere", async (req, res) => {
  const result = await pool.query("SELECT * FROM tiere");
  res.json(result.rows);
});

app.post("/tiere", (req, res) => {
  const { tierart, name, krankheit, age, gewicht } = req.body;
  db.run(
    `INSERT INTO tiere (tierart,name,krankheit,age,gewicht) VALUES(?,?,?,?,?)`,
    [tierart, name, krankheit, age, gewicht]
  );
  res.status(201).send("Tier wurde erfolgreich hinzugefügt");
});

app.delete("/tiere/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("DELETE FROM tiere WHERE id = $1", [id]);
    res.send("Tier wurde gelöscht.");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);

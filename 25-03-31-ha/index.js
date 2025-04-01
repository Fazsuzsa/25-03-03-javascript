const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5050",
  })
);

function readFile() {
  const data = fs.readFileSync("books.json", "utf-8");
  return JSON.parse(data);
}

function writeFile(data) {
  fs.writeFileSync("books.json", JSON.stringify(data, null, 2));
}

app.get("/books", (req, res) => {
  try {
    const books = readFile();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
});

app.post("/books", (req, res) => {
  const books = readFile();
  const { title, author } = req.body;
  if (title && author) {
    const newBook = {
      id: books.length + 1,
      title: title,
      author: author,
    };
    books.push(newBook);
    writeFile(books);
    req.statusCode(201).json(newBook);
  } else {
    res.send("Daten unvollständig!");
  }
});

app.put("/books/:id", (req, res) => {
  try {
    const id = req.params.id;
    const books = readFile();
    const newTitle = req.body.title;
    const foundBook = books.find((book) => book.id == id);
    foundBook.Title = newTitle;
    res.json(foundTitle);
    writeFile(books);
  } catch (err) {
    res.status(500).json({ error: "Internal Server error!" });
  }
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const books = readFile();
  const index = books.findIndex((book) => book.id == id);
  const removedBook = books.splice(index, 1);
  res.json("Erfolgreich gelöscht: " + removedBook[0].name);
  writeFile(books);
});

app.get("books/search", (req, res) => {
  const books = readFile();
  const title = req.query.title;
  const result = books.filter((book) => book.title == title);
  writeFile(result);
});

app.listen(5005);

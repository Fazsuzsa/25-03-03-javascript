const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

function readFile() {
  const data = fs.readFileSync("books.json", "utf-8");
  return JSON.parse(data);
}

function writeFile(data) {
  fs.writeFileSync("books.json", JSON.stringify(data, null, 2));
}

app.get("/books", (req, res) => {
  const books = readFile();
  res.json(books);
});

app.post("/books", (req, res) => {
  const books = readFile();
  const { title, author } = req.body;
  if (title && author) {
    const newBook = {
      id: books.legth + 1,
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
  const id = req.params.id;
  const books = readFile(); // Datei aufrufen
  const newTitle = req.body.title;
  const foundBook = books.find((book) => book.id == id);
  foundBook.Title = newTitle;
  res.json(foundTitle);
  writeFile(books);
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const books = readFile();
  const index = books.findIndex((book) => book.id == id);
  const removedBook = books.splice(index, 1);
  res.json("Erfolgreich gelöscht: " + removedBook[0].name);
  writeFile(books);
});

app.listen(3000);

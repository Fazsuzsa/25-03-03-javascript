import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/content", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Content</title>
        </head>
        <body>
            <h1>Express</h1>
            <p1>Hier wird HTML zurückgegeben.</p1>
        </body>
        </html>
    `);
});

app.get("/api/data", (req, res) => {
    res.json({
        fullName: "Lukas Probst",
        age: 29,
    });
});

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});
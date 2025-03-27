const tiere = [
    { id: 1, name: "Bello", art: "Hund", alter: 3 },
    { id: 2, name: "Mieze", art: "Katze", alter: 5 }
  ];


GET /tiere // Gibt eine Liste aller Tiere zurück
GET /tiere/search?art=hund // Filtert nach einer Tierart (z. B. Hund, Katze)
GET /tiere/:id // Gibt nur das Tier mit der angegebenen ID zurück
POST /tiere // Fügt ein neues Tier zur Liste hinzu (über JSON-Body)
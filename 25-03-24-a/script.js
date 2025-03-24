const addButton = document.getElementById("addButton");
const artikelInput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");

let gesamtPreis = 0;

addButton.addEventListener("click", () => {
  const artikel = artikelInput.value;
  const anzahl = anzahlInput.value;
  const preis = preisInput.value;

  // Neues Element erstellen und in die Liste einfügen
  const new_li = document.createElement("li");
  new_li.textContent = `${anzahl} x ${artikel}: ${preis}€ p.P. ------ ${
    anzahl * preis
  }€`;

  // Füge einen Löschen Button hinzu
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    liste.removeChild(new_li);
    gesamtPreis -= anzahl * preis;
    updatePreis();
  });
  new_li.appendChild(deleteButton);

  liste.appendChild(new_li);

  // Gesamtpreis aktualisieren
  gesamtPreis += anzahl * preis;
  updatePreis();

  // Inputfelder leeren
  artikelInput.value = "";
  anzahlInput.value = "";
  preisInput.value = "";
});

function updatePreis() {
  gesamt.textContent = `Gesamt: ${gesamtPreis}€`;
}

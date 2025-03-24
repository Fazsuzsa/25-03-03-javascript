const addButton = document.getElementById("addbutton");
const artikelInnput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");

let gesamtPreis = 0;

addButton.addEventListener("click", () => {
  const artikel = artikelInnput.value;
  const anzahl = anzahlInput.value;
  const preis = preisInput.value;

  let isValid = true;
  if (!artikel) {
    artikelInput.style.border = "2px solid red";
    isValid = false;
  } else {
    artikelInput.style.border = "";
  }

  //neues Element erstellen und in die Liste einfügen
  const newLi = document.createElement("li");
  newLi.textContent = `${anzahl} x ${artikel}: ${preis}€/St. --- ${
    anzahl * preis
  }€`;

  //füge einen Check button hinzu
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      newLi.style.textDecoration = "line-through";
    } else {
      newLi.style.textDecoration = "none";
    }
  });
  //füge einen Löschen button hinzu
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    liste.removeChild(newLi);
    gesamtPreis -= anzahl * preis;
    updatePreis();
  });
  new_li.prepend(checkBox);
  newLi.appendChild(deleteButton);

  liste.appendChild(newLi);

  //Gesamtpreis aktualisieren
  gesamtPreis += anzahl * preis;
  updatePreis();

  //Inputfelder leeren
  artikelInput.value = "";
  anzahlInput.value = "";
  preisInput.value = "";
});

function updatePreis() {
  gesamt.textContent = `Gesamt: ${gesamtPreis}€`;
}

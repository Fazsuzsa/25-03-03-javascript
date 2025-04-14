const buttonShowAnimals = document.getElementById("button_show_animals");
const showAnimals = document.getElementById("show_animals");

// buttonShowAnimals.addEventListener("click", () => {
//     fetch("http://127.0.0.1:3000/tiere", )
//     .then(res => res.json())
//     .then(data => displayData(data))

//     function displayData(data) {
//         console.log(data)
//     }
// });

buttonShowAnimals.addEventListener("click", async () => {
  const res = await fetch("http://127.0.0.1:3000/tiere");
  displayData(await res.json());

  function displayData(data) {
    console.log(data);
    showAnimals.innerHTML = "";
    data.forEach((tier) => {
      console.log(tier);
      const li = document.createElement("li");
      li.textContent = tier.name;
      showAnimals.appendChild(li);
    });
  }
});

const tierart = document.getElementById("inputTierart");
const name = document.getElementById("inputName");
const krankheit = document.getElementById("inputKrankheit");
const age = document.getElementById("inputAge");
const gewicht = document.getElementById("inputGewicht");
const antwort = document.getElementById("antwort");
const buttonAddAnimal = document.getElementById("button_add_animal");

buttonAddAnimal.addEventListener("click", async () => {
  try {
    const requestBody = {
      tierart: tierart.value,
      name: name.value,
      krankheit: krankheit.value,
      age: age.value,
      gewicht: gewicht.value,
    };
    fetch("http://localhost:3000/tiere", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        antwort.innerText = JSON.stringify(data);
        console.log(data);
      });
  } catch (err) {
    console.log("Fehler bei Fetch: "err);
  }
});

window.onload = () => {
  fetch("http://localhost:3000/tiere")
    .then((res) => res.json())
    .then((data) => {
      antwort.innerText = JSON.stringify(data);
    });
};
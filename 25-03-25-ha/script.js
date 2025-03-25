document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const button = document.getElementById("searchButton");

  function fetchWeather() {
    const location = document.getElementById("userInput").value;
    if (!location) {
      output.innerHTML = "Bitte einen Ort eingeben.";
      return;
    }

    fetch(`https://wttr.in/${location}?format=%C+%t`)
      .then((response) => response.text())
      .then((data) => {
        const [condition, temperature] = data.split(" ");
        output.innerHTML = `<h2>Wetter in ${location}</h2>
                                   <p>Bedingung: ${condition}</p>
                                   <p>Temperatur: ${temperature}</p>`;
      })
      .catch((error) => {
        output.innerHTML = "Fehler beim Abrufen der Wetterdaten.";
      });
  }

  button.addEventListener("click", fetchWeather);
});

// Schreibt eine Website, die Daten von APIs holt und diese auf einer Website darstellt:
// Mindestens zwei verschiedene API calls sollen benutzt werden
// Benutzt createElement, und appendChild um die informationen auf der Website darzustellen
// Bsp.: Baut mit wttr.in eine kleine Wettervorhersage (Suchfeld für den Ort, Ausgabe der Temperatur und der Wetterbeschreibung)
// https://wttr.in/${place}?format=%C+%t

// <input type="text" id="userInput" placeholder="Gib eine Stadt ein"/>
// <button id="searchButton">Wetterbericht</button>
// <div id="output"></div>

// import requests

// # response = requests.get("https://wttr.in/berlin?format=j1")
// input_city = input("Gib eine Stadt ein: ").capitalize()
// response = requests.get(f"https://wttr.in/{input_city}?format=j1")
// daten = response.json()
// temperatur = daten["current_condition"][0]["temp_C"]
// temp_gefuehlt = daten["current_condition"][0]["FeelsLikeC"]
// area = daten["nearest_area"][0]["areaName"][0]["value"]
// print(
//  f"Es ist {temperatur} °C, gefühlt {temp_gefuehlt} °C in {input_city}. Der Ort der Wetterstation ist {area}."
// )
// # wetter = daten["current_condition"][0]["weatherDesc"][0]["value"]
// # print(f"The weather in Berlin is {wetter} with {temperatur} °C.")

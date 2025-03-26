const output = document.getElementById("output");

function searchWeather() {
  const input = document.getElementById("userInput").value;

  fetch(`https://wttr.in/${input}?format=j1`)
    .then((res) => res.json())
    .then((data) => {
      const temperature = data.current_condition[0].temp_C;
      const condition = data.current_condition[0].weatherDesc[0].value;
      const description = document.createElement("p");
      description.innerText = `Temperatur: ${temperature}°C, Bedingungen: ${condition}`;
      output.innerHTML = `<h4>Wetter in ${input}:</h4>`;
      output.appendChild(description);
    });
}

const button = document.getElementById("searchButton");
button.addEventListener("click", searchWeather);

// Schreibt eine Website, die Daten von APIs holt und diese auf einer Website darstellt:
// Mindestens zwei verschiedene API calls sollen benutzt werden
// Benutzt createElement, und appendChild um die informationen auf der Website darzustellen
// Bsp.: Baut mit wttr.in eine kleine Wettervorhersage (Suchfeld für den Ort, Ausgabe der Temperatur und der Wetterbeschreibung)
// https://wttr.in/${place}?format=%C+%t

// python

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

fetch("https://swapi.dev/species")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

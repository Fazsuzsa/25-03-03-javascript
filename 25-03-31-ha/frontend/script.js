submitButton.addEventListener("click", () => {
  try {
    const requestBody = {
      title: titleInput.value,
      author: authorInput.value,
    };

    fetch("http://localhost:5005/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        antwortFeld.innerText = JSON.stringify(data);
        console.log(data);
      });
  } catch (err) {
    console.log("fehler bei fetch: " + err);
  }
});

window.onload = () => {
  fetch("http://localhost:5005/books")
    .then((res) => res.json())
    .then((data) => {
      antwortFeld.innerText = JSON.stringify(data);
    });
};

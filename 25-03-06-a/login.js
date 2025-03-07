// SIMULIERTE DATENBANK
const USERS = [
  {
    username: "mex",
    password: "test123",
  },
  {
    username: "anna",
    password: "test1234",
  },
];

const onClickLogin = async () => {
  console.log("Hello from onClick Login");
  const username = document.getElementById("emailTextinput").value.trim(); // trim nimm Leerzeichen weg
  const password = document.getElementById("passwordTextinput").value.trim(); // trim nimm Leerzeichen weg

  // SIMULIERTE API ABFRAGE
  // Array .find methode sucht ein Element in der List, wo die Bedingung true ist
  const loggedInUser = USERS.find(
    (item) => item.username === username && item.password === password
  );

  if (loggedInUser) {
    window.location.href = "./index.html";
  } else {
    alert("Be smart and remember your actual credentials");
  }
};

function randomNormalFunction() {}

const randomNormalFunctionArrowVersion = () => {};

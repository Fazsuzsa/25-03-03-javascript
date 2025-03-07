// SIMULIERTE DATENBANK
const USERS = [];

const onClickSignup = async () => {
  const username = document.getElementById("emailTextinput").value.trim(); // trim nimm Leerzeichen weg
  const password = document.getElementById("passwordTextinput").value; // trim nimm Leerzeichen weg
  const repeatPassword = document
    .getElementById("repeatPasswordTextinput")
    .value.trim();
  const firstName = document.getElementById("firstNameTextinput").value; // trim nimm Leerzeichen weg
  const familyName = document.getElementById("familyNameTextinput").value; // trim nimm Leerzeichen weg

  if (password !== repeatPassword) {
    alert("Password do not match!");
    return;
  }

  const newUser = {
    username: username,
    password: password,
    firstName: firstName,
    familyName: familyName,
  };

  // SIMULIERTE API ANFRAGE
  USERS.push(newUser);

  console.log("ALL USERS", USERS);
  if (newUser) {
    const contenContainerDiv = document.getElementById("contentContainer");
    contenContainerDiv.innerHTML = `<div class="welcomeText">Hallo, Willkommen auf unserer legendären Wesbite, ${newUser.username}</div>`;
  } else {
    alert("Something went wrong!");
  }
};

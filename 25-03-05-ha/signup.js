function onClickButton() {
  const boxDiv = document.getElementById("box");
  boxDiv.innerHTML = "<button>I am a button</button>";
  const currentBgColor = boxDiv.style.backgroundColor;
  console.log("box div background", currentBgColor);
  boxDiv.style.backgroundColor = "green";
}

function userSignUp() {
  const emailTi = document.getElementById("emailti").value;
  const passwordTi = document.getElementById("passwordti").value;
  const rePasswordTi = document.getElementById("repasswordti").value;
  const firstName = document.getElementById("firstName").value;
  const familyName = document.getElementById("familyName").value;

  if (emailTi && passwordTi && rePasswordTi && firstName && familyName) {
    if (emailTi.length >= 3) {
      if (passwordTi === rePasswordTi) {
        alert(`Benutzer ${firstName} ${familyName} hat sich erfolgreich mit ${emailTi} und ${passwordTi} angemeldet`)
      } else {
        alert("Die Passwörter stimmen nicht überein!")
      }
    } else {
      alert("Email ist kürzer als 3 Zeichen!")
    }
  } else {
    alert("Nicht alles ausgefüllt!")
  }
}


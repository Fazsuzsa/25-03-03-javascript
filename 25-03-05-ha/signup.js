function userSignUp() {
  const emailTi = document.getElementById("emailti").value;
  const passwordTi = document.getElementById("passwordti").value;
  const rePasswordTi = document.getElementById("repasswordti").value;
  const firstName = document.getElementById("firstName").value;
  const familyName = document.getElementById("familyName").value;

  if (emailTi.length >= 3) {
    if (passwortTi === rePasswordTi) {
      if (firstName && familyName !== undefined) {
        alert(`Benutzer ${firstName} ${familyName} hat sich erfolgreich mit ${emailTi} und ${passwordTi} angemeldet`)
      } else {
        alert("Nicht alles ausgefüllt!")
      }
    } else {
      alert("Die Passwörter stimmen nicht überein!")
    }
  } else {
    alert("Email ist kürzer als 3 Zeichen!")
  }
}


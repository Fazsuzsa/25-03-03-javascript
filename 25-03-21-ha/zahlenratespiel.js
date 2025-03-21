let number = parseInt(document.getElementById("inputField").value);
let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessingGame() {
  let outputField = document.getElementById("outputField");
  if (number === randomNumber) {
    outputField.textContent = "The guessed number is exactly right!";
  } else if (number < randomNumber && number > 0) {
    outputField.textContent = `${randomNumber} is the right number. The guessed number is too low!`;
  } else if (number > randomNumber && number < 11) {
    outputField.textContent = `${randomNumber} is the right number. The guessed number is too high!`;
  } else {
    outputField.textContent = "Invalid number!";
  }
}

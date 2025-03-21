let number = parseInt(prompt("Enter a guess between 1 and 10:"));
let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessingGame() {
  if (number === randomNumber) {
    alert("The guessed number is exactly right!");
  } else if (number < randomNumber && number > 0) {
    alert(
      `${randomNumber} is the right number. The guessed number is too low!`
    );
  } else if (number > randomNumber && number < 11) {
    alert(
      `${randomNumber} is the right number. The guessed number is too high!`
    );
  } else {
    alert("Invalid number!");
  }
}

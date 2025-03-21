const header = document.getElementById("h1_header");
header.innerHTML = "Dieser Text kommt aus der Javascript Datei.";
function headerSyleChange() {
  header.style.backgroundColor = "darkolivegreen";
  header.style.color = "wheat";
  header.style.fontSize = "30px";
}

function changeFontSize(pixel) {
  header.style.fontSize = pixel + "px";
}

let button1 = document.getElementById("onClick");
let button2 = document.getElementById("onMouseOver");
let button3 = document.getElementById("onWheel");
let button4 = document.getElementById("onMouseLeave");

button1.onclick = function () {
  alert("Du hast mich angeklickt.");
};

button2.onmouseover = function () {
  alert("Du schwebst über mich.");
};

button3.onwheel = function () {
  alert("Überroll mich nicht!");
};

button4.onmouseleave = function () {
  alert("Verlass mich nicht!");
};

let ausgabefeld = document.getElementById("ausgabefeld");

function showInputValue() {
  ausgabefeld.innerHTML = document.getElementById("inputField").value;
}

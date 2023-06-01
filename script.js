let button = document.getElementById("submitButton");
let resetButton = document.getElementById("resetBtn");
let celsiusButton = document.getElementById("cButton");
let fahrenheitButton = document.getElementById("fButton");
let temp;

// On click submit check for the inputs

button.onclick = function () {
  if (celsiusButton.checked) {
    temp = document.getElementById("inputField").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    if (temp !== Number(temp)) {
      alert("Not a number, retard.");
    } else if (temp === Number(temp)) {
      document.getElementById("tempLabel").innerHTML = Math.floor(temp) + "°C";
    }
  } else if (fahrenheitButton.checked) {
    temp = document.getElementById("inputField").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    if (temp !== Number(temp)) {
      alert("Not a number, you are a retard.");
    } else if (temp === Number(temp)) {
      document.getElementById("tempLabel").innerHTML = Math.floor(temp) + "°F";
    }
  } else {
    alert("You must submit an option, fucking twat.");
  }
};

resetButton.onclick = function () {
  document.getElementById("tempLabel").innerHTML = "";
};

// Functions

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 3 + 32;
}

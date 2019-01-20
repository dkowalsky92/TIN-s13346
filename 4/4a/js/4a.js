var x;

function convertFrom(degree) {
  if (degree === "celsius") {
    x = document.getElementById("celsius").value * (9 / 5) + 32;
    document.getElementById("fahrenheit").value = x;
    document.getElementById("kelvin").value = (x + 459.67) * (5 / 9);
    document.getElementById("rankine").value = x + 459.67;
  } else if (degree === "fahrenheit") {
    x = (document.getElementById("fahrenheit").value - 32) * (5 / 9);
    document.getElementById("celsius").value = x;
    document.getElementById("kelvin").value = x + 273.15;
    document.getElementById("rankine").value = (x + 273.15) * (9 / 5);
  } else if (degree === "kelvin") {
    x = document.getElementById("kelvin").value - 273.15;
    document.getElementById("celsius").value = x;
    document.getElementById("fahrenheit").value = x * (9 / 5) + 32;
    document.getElementById("rankine").value = (x + 273.15) * (9 / 5);
  } else {
    x = (document.getElementById("rankine").value - 491.67) * (5 / 9);
    document.getElementById("celsius").value = x;
    document.getElementById("fahrenheit").value = x * (9 / 5) + 32;
    document.getElementById("kelvin").value = x + 273.15;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var seconds = 5;
  var countdown = document.getElementById("countdown");
  var delayLoad = document.getElementById("delay-load");

  setInterval(function() {
    if (seconds <= 0) {
      countdown.innerHTML = "";
    }
    if (seconds > 0) {
      countdown.innerHTML = seconds;
    }
    if (seconds === 0) {
      delayLoad.style.visibility = "visible";
      return;
    }
    --seconds;
  }, 1000);
});

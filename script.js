function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const thermometerLevel = document.getElementById("thermometer-level");
  const temperatureDisplay = document.getElementById("temperature-display");

  let celsiusValue, fahrenheitValue;

  if (!isNaN(celsiusInput.value) && celsiusInput.value !== "") {
    celsiusValue = parseFloat(celsiusInput.value);
    fahrenheitValue = (celsiusValue * 9) / 5 + 32;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    temperatureDisplay.textContent = `${celsiusValue.toFixed(2)}°C`;

    // Update thermometer level
    thermometerLevel.setAttribute("cy", 40 - celsiusValue * 1.5); // Adjust scaling as needed
  } else if (!isNaN(fahrenheitInput.value) && fahrenheitInput.value !== "") {
    fahrenheitValue = parseFloat(fahrenheitInput.value);
    celsiusValue = ((fahrenheitValue - 32) * 5) / 9;

    celsiusInput.value = celsiusValue.toFixed(2);
    temperatureDisplay.textContent = `${celsiusValue.toFixed(2)}°C`;

    // Update thermometer level
    thermometerLevel.setAttribute("cy", 40 - celsiusValue * 1.5); // Adjust scaling as needed
  } else {
    alert("Please enter a valid number");
  }
}

function clearFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("thermometer-level").setAttribute("cy", 40); // Reset thermometer
  document.getElementById("temperature-display").textContent = "0°C";
}

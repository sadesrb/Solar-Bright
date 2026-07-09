const batteryFill = document.querySelector("#batteryFill");
const batteryLevel = document.querySelector("#batteryLevel");
const batteryCopy = document.querySelector("#batteryCopy");
const energyToday = document.querySelector("#energyToday");
const weatherText = document.querySelector("#weatherText");

const simulatedBattery = 82 + Math.floor(Math.random() * 11);
const simulatedEnergy = (17.5 + Math.random() * 3.5).toFixed(1);

if (batteryFill && batteryLevel && batteryCopy) {
  batteryFill.style.width = `${simulatedBattery}%`;
  batteryLevel.textContent = `${simulatedBattery}%`;
  batteryCopy.textContent = `${simulatedBattery}%`;
}

if (energyToday) {
  energyToday.textContent = `${simulatedEnergy} kWh`;
}

if (weatherText) {
  weatherText.textContent =
    simulatedBattery > 88
      ? "Clear sunny conditions with excellent charging potential."
      : "Sunny conditions with strong charging potential.";
}

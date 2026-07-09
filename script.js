const batteryFill = document.querySelector("#batteryFill");
const batteryLevel = document.querySelector("#batteryLevel");
const batteryCopy = document.querySelector("#batteryCopy");
const energyToday = document.querySelector("#energyToday");
const weatherText = document.querySelector("#weatherText");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-navigation");

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

if (siteHeader && menuToggle && nav) {
  const closeMenu = () => {
    siteHeader.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
}

if (siteHeader) {
  const updateHeaderShadow = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeaderShadow();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
}

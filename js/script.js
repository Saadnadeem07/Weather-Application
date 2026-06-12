document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "9920008360e6212a01a59fd9eb579f46";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const input = document.getElementById("cityInput");
  const button = document.getElementById("searchButton");
  const message = document.getElementById("message");
  const weather = document.getElementById("weather");

  const el = {
    city: document.getElementById("city"),
    icon: document.getElementById("icon"),
    temp: document.getElementById("temp"),
    condition: document.getElementById("condition"),
    feels: document.getElementById("feels"),
    humidity: document.getElementById("humidity"),
    wind: document.getElementById("wind"),
  };

  async function getWeather() {
    const city = input.value.trim();
    if (!city) {
      showMessage("Please enter a city name.");
      return;
    }

    showMessage("Loading…");
    const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      render(data);
      showMessage("");
    } catch (error) {
      weather.classList.remove("show");
      showMessage("Could not find that city. Try again.", true);
    }
  }

  function render(data) {
    const { name, sys, main, weather: conditions, wind } = data;

    el.city.textContent = `${name}, ${sys.country}`;
    el.icon.src = `https://openweathermap.org/img/wn/${conditions[0].icon}@4x.png`;
    el.icon.alt = conditions[0].description;
    el.temp.textContent = `${Math.round(main.temp)}°C`;
    el.condition.textContent = conditions[0].description;
    el.feels.textContent = `${Math.round(main.feels_like)}°`;
    el.humidity.textContent = `${main.humidity}%`;
    el.wind.textContent = `${Math.round(wind.speed)} m/s`;

    weather.classList.add("show");
  }

  function showMessage(text, isError = false) {
    message.textContent = text;
    message.classList.toggle("error", isError);
  }

  button.addEventListener("click", getWeather);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") getWeather();
  });
});

# 🌤️ Weather App

A clean, responsive weather forecast application built with vanilla **HTML, CSS, and JavaScript**, powered by the [OpenWeather API](https://openweathermap.org/api). Search any city in the world and get the current temperature, conditions, humidity, and wind speed in a modern glassmorphism interface.

🔗 **Live Demo:** _enable [GitHub Pages](https://pages.github.com/) in your repo settings to host it for free_

---

## ✨ Features

- 🔍 Search current weather by city name
- 🌡️ Temperature, "feels like", humidity, and wind speed
- 🎨 Modern glassmorphism UI with a responsive layout
- 🖼️ Live weather icons from OpenWeather
- ⌨️ Search with the button or the **Enter** key
- ⚠️ Friendly loading and error states
- 📱 Works on desktop and mobile

---

## 📁 Project Structure

```
weather-app/
├── css/
│   └── styles.css      # Styles and design tokens
├── js/
│   └── script.js       # Fetch logic and DOM rendering
├── .github/workflows/  # GitHub Pages deployment
│   └── static.yml
├── index.html          # Markup
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

No build tools or dependencies required — it's a static site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/weather-app.git
   cd weather-app
   ```

2. **Open it**
   - Simply open `index.html` in your browser, **or**
   - Serve it locally for the best experience:
     ```bash
     # Python 3
     python3 -m http.server 8000
     ```
     Then visit [http://localhost:8000](http://localhost:8000).

---

## 🔑 API Key

This project uses the free [OpenWeather Current Weather API](https://openweathermap.org/current). A demo key is included in `js/script.js` for convenience. To use your own:

1. Create a free account at [openweathermap.org](https://home.openweathermap.org/users/sign_up).
2. Copy your API key from the dashboard.
3. Replace the value of `API_KEY` in [`js/script.js`](js/script.js):
   ```js
   const API_KEY = "your_api_key_here";
   ```

> **Note:** Keys in client-side code are publicly visible. For production apps, proxy requests through a backend to keep your key private.

---

## 🛠️ Built With

- **HTML5**
- **CSS3** (Flexbox, Grid, backdrop-filter)
- **JavaScript** (ES6, Fetch API, async/await)
- **OpenWeather API**

---

## 📦 Deployment

This repo ships with a GitHub Actions workflow ([`.github/workflows/static.yml`](.github/workflows/static.yml)) that deploys the site to **GitHub Pages** on every push to `main`. To enable it:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set the source to **GitHub Actions**.
3. Push to `main` — your site goes live automatically.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ♥ by **Muhammad Saad Nadeem**

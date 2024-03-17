document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '9920008360e6212a01a59fd9eb579f46';

    document.getElementById('searchButton').addEventListener('click', function () {
        getWeather();
    });

    async function getWeather() {
        const city = document.getElementById('cityInput').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        try{
            let weatherData = await fetch(apiUrl)
            weatherData = await weatherData.json()
            console.log(weatherData);
            updateWeatherInfo(weatherData);
        }
        catch(e){
            document.getElementById("invalidInput").style.display="block";
            setTimeout(() => {
                document.getElementById("invalidInput").style.display="none";
            }, 1000);
        }
    }

    function updateWeatherInfo(data) {
        const weatherIcon = document.getElementById('weather-icon');
        const tempDiv = document.getElementById('temp-div');
        const weatherCondition = document.getElementById('weather-condition');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('wind-speed');

       weatherIcon.src = './a.png'
        weatherIcon.style.display = 'block';
        tempDiv.textContent = `Temperature: ${data.main.temp}°C`;
        weatherCondition.textContent = `Weather Condition: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }
});

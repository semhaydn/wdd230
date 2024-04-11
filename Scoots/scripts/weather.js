const apiKey = '17e69e0463561266d9cf2e2a84341d57';
const city = 'Cozumel';
const units = 'metric';

// Get elements from the page
const weatherMessage = document.getElementById('weatherMessage');
const currentHighTemp = document.getElementById('currentHighTemp');
const currentWeatherTitle = document.getElementById('currentWeatherTitle');
const weatherIcon = document.getElementById('weatherIcon');
const currentTemp = document.getElementById('currentTemp');
const currentHumidity = document.getElementById('currentHumidity');
const nextDayWeatherTitle = document.getElementById('nextDayWeatherTitle');
const nextDayTemp = document.getElementById('nextDayTemp');

// Function to fetch weather data
function fetchWeatherData() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      processWeatherData(data);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Function to process and display weather data
function processWeatherData(data) {
  // Current Weather
  const currentWeather = data.list[0];
  currentHighTemp.textContent = `High: ${currentWeather.main.temp_max}°C`; // Populate both locations
  currentWeatherTitle.textContent = `Current Weather - ${currentWeather.weather[0].main}`;
  weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png" alt="${currentWeather.weather[0].description}">`;
  currentTemp.textContent = `${currentWeather.main.temp}°C`;
  currentHumidity.textContent = `${currentWeather.main.humidity}%`;

  // Next Day (3:00 PM) - Assuming data is available at 3 hour intervals
  const nextDayIndex = 8; // Adjust if forecast intervals are different
  if (data.list.length > nextDayIndex) {
    const nextDayWeather = data.list[nextDayIndex];
    nextDayWeatherTitle.textContent = `Tomorrow (3:00 PM) - ${nextDayWeather.weather[0].main}`;
    nextDayTemp.textContent = `${nextDayWeather.main.temp}°C`;
  } else {
    nextDayWeatherTitle.textContent = "Tomorrow's Forecast Unavailable";
    nextDayTemp.textContent = '';
  }
}

// (Optional) Function to close the weather message 
const closeWeatherMessageButton = document.getElementById('closeWeatherMessage');
closeWeatherMessageButton.addEventListener('click', () => {
  weatherMessage.style.display = 'none';
});

// Fetch and process data when the page loads
fetchWeatherData();

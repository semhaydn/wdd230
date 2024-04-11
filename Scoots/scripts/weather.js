// Inside scripts/weather.js
const weatherMessage = document.getElementById('weatherMessage');
const closeButton = document.getElementById('closeWeatherMessage');

// Function to fetch and display weather data (you'll need an API key)
function fetchWeatherData() {
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; 
  const city = 'Cozumel'; 

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`) //Change units=metric to units=imperial for Fahrenheit
    .then(response => response.json())
    .then(data => {
       // ... process the weather data and populate the message ...
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Function to display the weather message
function displayWeatherMessage(messageContent) {
  weatherMessage.innerHTML = messageContent;
  weatherMessage.style.display = 'block'; 
}

// Close the weather message
closeButton.addEventListener('click', () => {
  weatherMessage.style.display = 'none';
});

// Fetch and display the weather data when the page loads
fetchWeatherData();

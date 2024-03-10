// windchill.js

function calculateWindChill(temperature, windSpeed) {
    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate the wind chill factor
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        
        // Display the wind chill factor on the page
        document.getElementById('windchill').textContent = Math.round(windChill) + ' °F';
    } else {
        // Display "N/A" if input values do not meet the requirements
        document.getElementById('windchill').textContent = 'N/A';
    }
}

// Extract temperature and wind speed values from the page
var temperatureValue = parseFloat(document.getElementById('temperature').textContent);
var windSpeedValue = parseFloat(document.getElementById('windspeed').textContent);

// Call the function with the extracted values
calculateWindChill(temperatureValue, windSpeedValue);

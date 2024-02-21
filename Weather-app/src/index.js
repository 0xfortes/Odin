import _ from 'lodash';

const apiKey = 'YOUR API';
const weatherDisplay = document.getElementById('weatherDisplay');

async function searchWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchWeather);

function displayWeather(data) {
    const { location, current } = data;
    const weatherCondition = current.condition.text.toLowerCase();
    const body = document.querySelector('body');

    // Define colors for different weather conditions - Those are just for demo/test purposes
    let backgroundColor;
    switch (weatherCondition) {
        case 'sunny':
            backgroundColor = '#ffea00'; // Yellow for sunny weather
            break;
        case 'rainy':
            backgroundColor = '#a9a9a9'; // Gray for rainy weather
            break;
        // Add more cases for other weather conditions as needed
        default:
            backgroundColor = '#a2a3a3'; // Default color
            break;
    }

    // Update background color
    body.style.backgroundColor = backgroundColor;

    const weatherInfo = `
        <h2>${location.name}, ${location.region}, ${location.country}</h2>
        <div>
            <p>Temperature: ${current.temp_c}°C / ${current.temp_f}°F</p>
            <p>Condition: ${current.condition.text}</p>
            <p>Humidity: ${current.humidity}%</p>
            <p>Wind Speed: ${current.wind_kph} km/h</p>
            <p>Wind Direction: ${current.wind_dir} </p>
        </div>
    `;
    weatherDisplay.innerHTML = weatherInfo;
}

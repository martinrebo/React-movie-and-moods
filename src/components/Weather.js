import React from 'react';
// import './../components/Weather.css';

function Weather() {

    async function showWeather() {
        let res = await fetch('api.openweathermap.org/data/2.5/weather?q=London&APPID=57af1d6f8f62ddb2a5354ea541196443');
        let weatherData= await res.json();
        console.log(weatherData.weather.id);

        // document.getElementById('weather-data').innerHTML = weatherData.weather.id;

        // return weatherData;
    }
    showWeather();

    return (
<div id="weather-data"> </div>
    )
}

export default Weather;
import React from 'react';
import { useState, useEffect } from 'react';
import './Weather.css';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles };
  };

function ConnectedWeather() {

    let urlDiscover = '//api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=57af1d6f8f62ddb2a5354ea541196443';

    const [data, setData] = useState(data);
    useEffect(() => {
        apiCall(); // get new data on 
        checkId(); // 
        
    }, []);

    const [id, setId] = useState("2");
    // useEffect(() => {
    //     checkId();
    // },[]);

    function apiCall() {
        fetch(urlDiscover)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
                checkId(myJson.weather[0].id);
                document.getElementById('weather-location').innerHTML = myJson.name;
                document.getElementById('weather-status').innerHTML = myJson.weather[0].description;

            });

    }
// Function to convert 3digits response of apiCall into 1 letter String. 
    function checkId(param) {
        let stringId = param + "";
        let codeId = stringId.charAt(0);
        convertId(codeId);
    }
    // Funtion to convert the Weather Id into the Gerre ID needed for URLgenre in Movies.js
    function convertId(value) {
        switch (value) {
            case '2':
                value = '27'; // Thunderstorm set the URLgenre value to Horror movies
                break;
            case '3':
                value = '18'; // Drizzle weather set URL genre value to Drama movies
                break;
            // More cases here
            case '5':
            value = '80'; // Rain weather set URL genre value to Crime movies
            break;

            case '6':
            value = '16'; // Snow weather set URL genre value to Animation movies
            break;

            case '7':
            value = '99'; // Atmosphere weather set URL genre value to Documentaries movies
            break;

            case '8':
            value = '35'; // Clouds weather set URL genre value to Comedy movies
            break;
            default:
            value = "28"; // action movies by default
            }
            return setId(value);
    }


    return (
        <div className="weather-container">
        <div id="weather-data"> {id}  this is the drama id for the URL  </div>
        <div id="weather-location"> </div>
        <div id="weather-status"> </div>
        </div>
    )
}

const Weather = connect(mapStateToProps)(ConnectedWeather);

export default Weather;
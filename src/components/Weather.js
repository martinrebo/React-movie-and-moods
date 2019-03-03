import React from 'react';
import { useState, useEffect } from 'react';
// import './../components/Weather.css';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles };
  };

function ConnectedWeather() {

    let urlDiscover = '//api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=57af1d6f8f62ddb2a5354ea541196443';

    const [data, setData] = useState(data);
    useEffect(() => {
        apiCall();
        checkId();
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
                console.log(myJson);
                console.log(myJson.name);
                console.log(myJson.weather[0].id);
                checkId(myJson.weather[0].id);

            });

    }

    function checkId(param) {
        let stringId = param + "";
        let codeId = stringId.charAt(0);
        convertId(codeId);
    }
    
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
            value = '18'; // Clouds weather set URL genre value to Comedy movies
            break;
            default:
            value = "28"; // action movies by default
            }
            return setId(value);
    }


    return (
        <div id="weather-data"> {id} </div>
    )
}

const Weather = connect(mapStateToProps)(ConnectedWeather);

export default Weather;
let urlDiscover = '//api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=57af1d6f8f62ddb2a5354ea541196443';

function apiCall() {
    fetch(urlDiscover)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log( myJson.weather[0].id)

let idWeather= myJson.weather[0].id
return idWeather;
        });

    }

    apiCall();

    export default idWeather;

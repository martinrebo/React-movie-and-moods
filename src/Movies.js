import React, { useState, useEffect } from 'react';

function Movies() {
    const API_KEY = 'aedc983b8ecbee54751dd5b6e682190e';
    const URL = 'https://api.themoviedb.org/3/movie/550?'

    //Hooks
    const [movie, setMovie] = useState([{ text: 'Learn Hooks' }]);

    
    // API call 
    fetch('https://api.themoviedb.org/3/movie/550?api_key=aedc983b8ecbee54751dd5b6e682190e')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            let obj = JSON.stringify(myJson, null,"\t");
            let identity = document.getElementById("identity");
            let movieName = document.getElementById("movieName");

            identity.innerHTML = obj;
            movieName.innerHTML = myJson.original_title;
        });




    return (
        <div>
            <div id="identity"> </div>
 -------------moviejson text---------------
            <div id="movieName"> </div>

             <img src="https://image.tmdb.org/t/p/w200/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"  alt=""></img>
        </div>


    )

}

export default Movies;

//https://medium.freecodecamp.org/components-testing-in-react-what-and-how-to-test-with-jest-and-enzyme-7c1cace99de5


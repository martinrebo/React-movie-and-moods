import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../src/components/Movies.css";
import GenreButton from './GenreButton';
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";



function Movies(props) {

    const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=aedc983b8ecbee54751dd5b6e682190e';
    const URL_IMG = 'https://image.tmdb.org/t/p/w200/';
    const genreList = [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }]

    //Hooks
    const [isLoading, setIsLoading] = useState(true);

    const [genreURL, setGenreURL] = useState(genreList[0].id); //
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        document.getElementById('genre').innerHTML = genreURL;
        document.getElementById('genre-name').innerHTML = genreList[0].name;
    }, []);


    const [data, setData] = useState(data);
    useEffect(() => {
        apiCall();
    },[]);



    //URL constructor
    let urlParameters = '&language=en-US&with_genres=' + props.url + '&primary_release_year=2019&sort_by=vote_average.desc&vote_count.gte=10';
    let urlDiscover = URL + urlParameters;

    // API call  

    function apiCall() {
        fetch(urlDiscover)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
                setIsLoading(false);
            });
    }


    // slider 
    var settings = {
        dots: false,
        infinite: true,
        focusOnSelect: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        // prevArrow: '<i class="fas fa-angle-left"></i>',
        // nextArrow: ' <i class="fas fa-angle-right"></i>',
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1

                }
              },

            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (

        <div className="container-movie-back">
            <div id="genre"> </div>
            <div id="genre-name"> </div>
            {isLoading ? (
                <div>
                    "loading ...  "
</div>

            ) : (
                    <div className="mam-slider-container">
                        <Slider {...settings}>
                            {data.results.map((obj) =>
                                <div key={obj.id} className="list-movie tooltip">
                                    <div> {obj.vote_count} </div>
                                    <img src={URL_IMG + obj.poster_path} alt="" className="list-movie-img"></img>
                                    <div className="list-movie-score">
                                        <span className="list-movie-voteAverage"> {obj.vote_average} </span>
                                        <span className="list-movie-voteCount"> 
                                    <i className="fas fa-user icon"></i>
                                            {obj.vote_count}</span>


                                    </div>

                                    <div className="tooltiptext">
                                        <div className="tooltip-title">  {obj.title} </div>
                                        <div className="tooltip-overview"> {obj.overview} </div>
                                        <button className="tooltip-button"> Watch movie </button>
                                    </div>



                                </div>
                            )}
                        </Slider>
                    </div>
                )}
        </div>

    )
}


export default Movies;

        /* 





        Testing 
        https://medium.freecodecamp.org/components-testing-in-react-what-and-how-to-test-with-jest-and-enzyme-7c1cace99de5
        
        URL api> 
        // 'https://api.themoviedb.org/3/discover/movie?api_key=aedc983b8ecbee54751dd5b6e682190e&&primary_release_year=2019language=en-US&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'

            const genresList = { "genres": [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }] }


                const initialData = { "page": 1, "total_results": 16267, "total_pages": 814, "results": [{ "vote_count": 1987, "id": 19404, "video": false, "vote_average": 9.1, "title": "Dilwale Dulhania Le Jayenge", "popularity": 19.221, "poster_path": "\/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg", "original_language": "hi", "original_title": "दिलवाले दुल्हनिया ले जायेंगे", "genre_ids": [35, 18, 10749], "backdrop_path": "\/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg", "adult": false, "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.", "release_date": "1995-10-20" }, { "vote_count": 15, "id": 391039, "video": false, "vote_average": 9, "title": "Abado Yek Rouz", "popularity": 2.468, "poster_path": "\/whFWzGCzJitovpLColi1vXl0dfz.jpg", "original_language": "fa", "original_title": "Abado Yek Rouz", "genre_ids": [18, 53], "backdrop_path": "\/uh2CzZbLBp7JvAajMOyCM0pb1KA.jpg", "adult": false, "overview": "Somaieh, the youngest daughter of an indigent family, is getting married and fear is overwhelming each and every member of the family regarding how to overcome their difficulties after she's gone.", "release_date": "2016-03-16" }, { "vote_count": 16, "id": 417820, "video": false, "vote_average": 9, "title": "Miss Saigon: 25th Anniversary", "popularity": 2.919, "poster_path": "\/ty9X5o0D30BRIVIOHVstPfESXaB.jpg", "original_language": "en", "original_title": "Miss Saigon: 25th Anniversary", "genre_ids": [18, 10402, 10749, 10752], "backdrop_path": "\/hPqO7q2Bss2rqVq5wQX2wEvpUEI.jpg", "adult": false, "overview": "The 25th Anniversary performance – filmed at London's Prince Edward Theatre in 2014 – of the epic musical tale of a young Vietnamese bar girl, Kim, who falls in love with Chris, an American GI.  But their lives are torn apart by the fall of Saigon.", "release_date": "2016-09-22" }, { "vote_count": 18, "id": 499556, "video": false, "vote_average": 8.9, "title": "An Elephant Sitting Still", "popularity": 4.249, "poster_path": "\/bJfkDnsY9z9ohWdyzyCAqYZxbnS.jpg", "original_language": "zh", "original_title": "大象席地而坐", "genre_ids": [18], "backdrop_path": "\/vAp1u1TVufGRzmNsqtVuZhdHUFY.jpg", "adult": false, "overview": "In the northern Chinese city of Manzhouli, they say there is an elephant that simply sits and ignores the world. Manzhouli becomes an obsession for the protagonists of this film, a longed-for escape from the downward spiral in which they find themselves.", "release_date": "2018-03-08" }, { "vote_count": 11, "id": 538108, "video": false, "vote_average": 8.9, "title": "Threat Level Midnight", "popularity": 0.687, "poster_path": "\/edLRQHP1mL8ivygjvVV6lWE3G4G.jpg", "original_language": "en", "original_title": "Threat Level Midnight", "genre_ids": [28, 18, 80, 35], "backdrop_path": "\/aqE1BBouyyp9vfiKZZb1eqRgYyM.jpg", "adult": false, "overview": "Michael Scarn goes on a personal quest to stop the menacing Goldenface.", "release_date": "2011-02-17" }, { "vote_count": 10, "id": 280492, "video": false, "vote_average": 8.9, "title": "From What Is Before", "popularity": 1.215, "poster_path": "\/abxu4NSbzVDUBDB56jCr4PLGL9G.jpg", "original_language": "tl", "original_title": "Mula sa kung ano ang noon", "genre_ids": [18], "backdrop_path": "\/5njORGMjxaRopXGnfCSSy0jpipa.jpg", "adult": false, "overview": "The Philippines, 1972. Mysterious things are happening in a remote barrio. Wails are heard from the forest, cows are hacked to death, a man is found bleeding to death at the crossroad and houses are burned. Ferdinand E. Marcos announces Proclamation No. 1081 putting the entire country under Martial Law.", "release_date": "2014-07-03" }, { "vote_count": 16, "id": 99356, "video": false, "vote_average": 8.9, "title": "Hell Boats", "popularity": 1.479, "poster_path": "\/9Ii84KTdOOBv4AOF6wIQaA0aLah.jpg", "original_language": "en", "original_title": "Hell Boats", "genre_ids": [18, 10752], "backdrop_path": "\/dPexKp3bcDHNJfbeg9BYStiAUmP.jpg", "adult": false, "overview": "A war drama of motor torpedo boats which did much unsung work in WW2, but the naval battles merely provide an exciting story in which an even more special romantic drama is wrapped up.", "release_date": "1970-03-20" }, { "vote_count": 11, "id": 103418, "video": false, "vote_average": 8.9, "title": "Asmaa", "popularity": 0.737, "poster_path": "\/3Kd1fVuxFiUfxa023rB1GtiFu23.jpg", "original_language": "ar", "original_title": "أسماء", "genre_ids": [18], "backdrop_path": "\/npkFCei9vkyJXoigS4JnxaIniNL.jpg", "adult": false, "overview": "Embodies the Hind Sabri in the events of the movie character girl suffering from HIV AIDS and decide not to surrender his Vtjud violent war against him, whether to seek treatment for themselves or bring hope in the hearts of all who have the disease dreaded, and gradually be able to achieve many of its goals and, following the events.", "release_date": "2011-12-07" }, { "vote_count": 12, "id": 72995, "video": false, "vote_average": 8.8, "title": "Once Upon a Time the City of Fools", "popularity": 0.79, "poster_path": "\/upaK9vReqbkdsLjepeHhAaCIF4t.jpg", "original_language": "it", "original_title": "C'era una volta la città dei matti...", "genre_ids": [18], "backdrop_path": null, "adult": false, "overview": "A biopic of Franco Basaglia, the Italian psychiatrist.", "release_date": "2010-01-01" }, { "vote_count": 11, "id": 134477, "video": false, "vote_average": 8.8, "title": "Sandhesam", "popularity": 2.12, "poster_path": "\/tF1Y52WGqX7t3Lj35oQC6IL3ENB.jpg", "original_language": "ml", "original_title": "സന്ദേശം", "genre_ids": [35, 18, 10751], "backdrop_path": "\/4hLgKxux7MTSt8jSZ1UiQW5Sujd.jpg", "adult": false, "overview": "After his retirement, Raghavan Nair (Thilakan) is back at his home. His long cherished dream to spend his retired life along with his family is thwarted after seeing his two sons brawling each other over their political differences.", "release_date": "1991-02-04" }, { "vote_count": 10, "id": 450015, "video": false, "vote_average": 8.8, "title": "20 Seconds of Courage", "popularity": 0.739, "poster_path": "\/wyqlEhwZoDwAjumeStNI2HhTDlV.jpg", "original_language": "en", "original_title": "20 Seconds of Courage", "genre_ids": [18], "backdrop_path": null, "adult": false, "overview": "Five boys and girls. Five small courage. Five different stories. But all linked together.  From acclaimed director\/writer Shunsuke Okubo (\"Clocks Tell the Time\" and \"Moments\")", "release_date": "2016-04-15" }, { "vote_count": 13, "id": 438146, "video": false, "vote_average": 8.8, "title": "Birds of Passage", "popularity": 6.182, "poster_path": "\/4pTo2Lr9pWjg930BuXyi319u2Jd.jpg", "original_language": "es", "original_title": "Pájaros de verano", "genre_ids": [18, 80], "backdrop_path": "\/lcarJakzaR8z14GyXvzI0nDYVDH.jpg", "adult": false, "overview": "During the marijuana bonanza, a violent decade that saw the origins of drug trafficking in Colombia, Rapayet and his indigenous Wayuu family get involved in a booming business of selling marijuana to American youth in the 1970s. When greed, passion and honour collide, a fratricidal war breaks out that will put their lives, culture and ancestral traditions at stake.", "release_date": "2018-08-02" }, { "vote_count": 10, "id": 43459, "video": false, "vote_average": 8.8, "title": "The Pearl", "popularity": 1.415, "poster_path": "\/sdksnuUVSnB5slKAOhEBlQSM1B5.jpg", "original_language": "es", "original_title": "La perla", "genre_ids": [12, 18, 10749], "backdrop_path": "\/d5CRAY1ZI2D342Rgb1dnh01SfUT.jpg", "adult": false, "overview": "A poor Mexican diver discovers a valuable pearl in the ocean, but it brings his family only trouble", "release_date": "1947-01-01" }, { "vote_count": 11, "id": 129745, "video": false, "vote_average": 8.7, "title": "We Were There: True Love", "popularity": 0.69, "poster_path": "\/nzgnOPoIv4InvfQd8QxoQXBeM8E.jpg", "original_language": "ja", "original_title": "僕等がいた 後篇", "genre_ids": [18, 10749], "backdrop_path": "\/eLvoYfHPqaGsIpzEGbYDu98jyjQ.jpg", "adult": false, "overview": "During the 2nd year of high school in the winter season, Yano transferred from Kushiro to Tokyo due to a family matter. Yano and Nanami promised to meet again. A couple of years later, Nanami is busy finding a job, while Yano's friend Takeuchi supports her. in the beginning, Yano and Nanami kept their relationship, even with the long distance between them, but Yano suddenly stops contacting Nanami ...", "release_date": "2012-04-21" }, { "vote_count": 12, "id": 294730, "video": false, "vote_average": 8.7, "title": "Antes que termine o dia", "popularity": 0.6, "poster_path": "\/sEDsno11Vrfzxtoiy0LjdhtLivC.jpg", "original_language": "pt", "original_title": "Antes que termine o dia", "genre_ids": [18], "backdrop_path": "\/oGZTuwGEPGsHzRaMmuIzlO3NgA8.jpg", "adult": false, "overview": "", "release_date": "2004-09-07" }, { "vote_count": 12316, "id": 278, "video": false, "vote_average": 8.6, "title": "The Shawshank Redemption", "popularity": 33.372, "poster_path": "\/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg", "original_language": "en", "original_title": "The Shawshank Redemption", "genre_ids": [18, 80], "backdrop_path": "\/j9XKiZrVeViAixVRzCta7h1VU9W.jpg", "adult": false, "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.", "release_date": "1994-09-23" }, { "vote_count": 21, "id": 499028, "video": false, "vote_average": 8.6, "title": "Be with You", "popularity": 2.796, "poster_path": "\/mpJZ1YM7TMN00TYPQ7aXeKA4wHu.jpg", "original_language": "ko", "original_title": "지금 만나러 갑니다", "genre_ids": [10749, 18], "backdrop_path": "\/1YwobLXEIaHd82AXlCNUqh1SETt.jpg", "adult": false, "overview": "Along with his young son, Ji-ho, Woo-jin misses his wife Soo-a, who died after promising to return a year later with the rainy season. Miraculously, they reunite with Soo-a when the rainy season comes around, but she has no memory of her husband and son whom she dearly loved.", "release_date": "2018-03-14" }, { "vote_count": 24, "id": 122019, "video": false, "vote_average": 8.6, "title": "Macario", "popularity": 2.334, "poster_path": "\/xX9JGtsnXQAR7e1fWkr7zBuQUHN.jpg", "original_language": "es", "original_title": "Macario", "genre_ids": [18, 14, 9648], "backdrop_path": "\/9mqGJ9Z5VwrS5ymL7WlDIIzkAIu.jpg", "adult": false, "overview": "Poor, hungry peasant Macario longs for just one good meal on the Day of the Dead. After his wife cooks a turkey for him, he meets three apparitions, the Devil, God, and Death. Each asks him to share his turkey, but he refuses all except Death. In return, Death gives him a bottle of water which will heal any illness. Soon, Macario is more wealthy than the village doctor, which draws the attention of the feared Inquisition", "release_date": "1960-05-09" }, { "vote_count": 17, "id": 30973, "video": false, "vote_average": 8.6, "title": "The Visual Bible: The Gospel of John", "popularity": 1.727, "poster_path": "\/aqd9dYniWpnf4ZSLFKhRJnACO9a.jpg", "original_language": "en", "original_title": "The Visual Bible: The Gospel of John", "genre_ids": [18, 36], "backdrop_path": "\/niP4rJihdeyMzCnvwdWM9DlnAmc.jpg", "adult": false, "overview": "A word for word depiction of the life of Jesus Christ from the Good News Translation Bible as recorded in the Gospel of John.", "release_date": "2003-09-11" }, { "vote_count": 64, "id": 31217, "video": false, "vote_average": 8.6, "title": "The Human Condition I: No Greater Love", "popularity": 3.17, "poster_path": "\/5wF521QDBJplvbQq3lxWY3uYupU.jpg", "original_language": "ja", "original_title": "人間の條件　第１部純愛篇／第２部激怒篇", "genre_ids": [10752, 18, 36], "backdrop_path": "\/auPIWcb3XBsxuOtheHPPHdbPKAZ.jpg", "adult": false, "overview": "A Japanese pacifist and socialist, unable to face the dire consequences of conscientious objection, is transformed by his attempts to compromise with the demands of war-time Japan.", "release_date": "1959-01-15" }] }
*/
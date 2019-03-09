
import React, { Component } from 'react';
import Movies from './Movies';

const value = "";

export default class ClassWeahter extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      city: "",
      id: "",
    }
  }

  componentDidMount = () => {

    fetch('//api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=83372d5ff184f424adfd29285cb2a296')
      .then(response => response.json())
      .then(data => this.setState({
        data: data,
        city: data.name,
        id: data.weather[0].id

      }))
      .catch(error => { throw (error) })
  }

  shouldComponentUpdate(nextProps) {
    const differentTitle = this.props.title !== nextProps.title;
    const differentDone = this.props.done !== nextProps.done
    return differentTitle || differentDone;
}

  render() {

    const { data, city, id } = this.state;
    console.log(id);

    // Function to convert 3digits response of apiCall into 1 letter String. 

    // Funtion to convert the Weather Id into the Gerre ID needed for URLgenre in Movies.js
    let stringId = id + "";
    let codeId = stringId.charAt(0);
    let value = codeId;

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


        return (
          <div>
            

                        { this.state && this.state.data &&
<Movies key={this.state.data} url={value}/>
            }
          </div>
        )
    }
  }

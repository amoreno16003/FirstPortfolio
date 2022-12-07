import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Weather = (props) => {

  let [zipcode, setZipcode] = useState('');
  let [results, setResults] = useState('');
  
  // let [coordinates, setCoordinates] = useState({lat: '', lon:''});

  const handleChange = (event) => {
    setZipcode(event.target.value);
    console.log("your zipcode is " + zipcode);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    // How to use API (Documentation): https://openweathermap.org/current
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},US&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response =>{
      console.log('Weather API response', response.data);
      setResults(response.data);
    })
    .catch(error => console.log('ERROR', error));
  }

  //F = 1.8*(K-273) + 32.
  function KelvinToFaren (kelvin) {
    let result = 1.8*(kelvin-273)+32;
    result = parseFloat(result).toFixed(2);
    return result;
  }
  const displayWeather = () => {
    if (results) {
      return (
        <div>
          
          <h2>{results.name}</h2>
          <p>Temperature: {KelvinToFaren(results.main.temp)}F</p>
          <p>Wind Speed: {results.wind.speed}mph</p>
          <p>Description: {results.weather[0].description}</p>
          </div>
      );
    }
    else{
      return (
        <div></div>
      );
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          
        <label>
          Please enter your zip code for the weather:
          <input type="text" onChange={handleChange} value={zipcode}/>
        </label>
        <input type="submit" value="Get my forcast!"/>
      </form>
      {displayWeather()}
    </div>
  )
}

export default Weather
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState("");
  const [windDir, setWindDir] = useState("");
  const [gust, setGust] = useState("");
  const [precip, setPrecip] = useState(0);
  const [city, setCity] = useState("");

  const getWeather = async () => {
    const apiid = "e8d7d877ea765325ec20112280ea8cd3";
    const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiid}`;
    //url weathear have proplem in api key
    try {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=6e6263afb84f44279f731543222510&q=${lat},${long}&aqi=no`
      );
      setCity(response.data.location.name);
      setTemp(response.data.current.temp_f);
      setWind(response.data.current.wind_mph);
      setWindDir(response.data.current.wind_dir);
      setGust(response.data.current.gust_mph);
      setPrecip(response.data.current.precip_in);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, [lat]);

  return (
    <div className="weather-container">
      <h2>{city}</h2>
      <p>{`Current Temp: ${Math.round(temp)} °F`}</p>
      <p>{`Wind: ${windDir} ${Math.round(wind)} mph Gusts: ${Math.round(
        gust
      )} mph`}</p>
      <p>{`Precip: ${Math.round(precip)}in`}</p>
    </div>
  );
};

export default Weather;

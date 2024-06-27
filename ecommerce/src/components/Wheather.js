// src/Weather.js
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState('Delhi');
    const [weatherData, setWeatherData] = useState({});
    const [inputCity, setInputCity] = useState('');

    const apiKey = "61a1d8419f9d307924240958d89e284d";


    const getWeather = async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            console.log(response.data)
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getWeather(city);
    }, [city]);

    const handleCityChange = (e) => {
        setInputCity(e.target.value);
    };

    const handleCitySubmit = (e) => {
        e.preventDefault();
        setCity(inputCity);
    };

    return (
        <div className="container">
            <h1 className="my-4 text-center" id="head">Weather for {city}</h1>
            <form onSubmit={handleCitySubmit}>
                <input type="text" value={inputCity} onChange={handleCityChange} placeholder="Enter city name" />
                <button type="submit">Get Weather</button>
            </form>
            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Temperature</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Temperature is <span id="temp">{(weatherData.main.temp - 273.15).toFixed(2)}°C</span></li>
                                    <li>Condition is :<span id="min_temp">{weatherData.weather[0].description}</span></li> */
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                    Temperature Info
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Wind Info</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Cloud PCT is <span id="cloud_pct">{weatherData.cloud_pct}</span></li>
                                    <li>Feels like <span id="feels_like">{weatherData.feels_like}</span></li>
                                    <li>Humidity <span id="humidity">{weatherData.humidity}</span></li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                    Weather Info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Sun Info</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Wind degree <span id="wind_degrees">{weatherData.wind_degrees}</span></li>
                                    <li>Wind speed <span id="wind_speed">{weatherData.wind_speed}</span></li>
                                    <li>Sunrise time is <span id="sunrise">{weatherData.sunrise}</span></li>
                                    <li>Sunset time is <span id="sunset">{weatherData.sunset}</span></li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                    Sun Info
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    );
};

export default Weather;

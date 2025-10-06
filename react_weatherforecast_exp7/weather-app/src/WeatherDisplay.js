import React from "react";
import "./WeatherDisplay.css";

function Icon({ icon }) {
  // OpenWeather icons: http://openweathermap.org/img/wn/{icon}@2x.png
  return <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" />;
}

export default function WeatherDisplay({ data }) {
  const { current, forecast } = data;
  return (
    <div className="weather-wrap">
      <div className="current-card">
        <div className="left">
          <h2>{current.name}, {current.sys?.country}</h2>
          <div className="temp">{Math.round(current.main.temp)}°C</div>
          <div className="desc">{current.weather[0].description}</div>
        </div>
        <div className="right">
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
            alt="icon"
          />
          <div className="meta">
            <div>Humidity: {current.main.humidity}%</div>
            <div>Wind: {current.wind.speed} m/s</div>
          </div>
        </div>
      </div>

      <h3 className="forecast-title">5-day forecast</h3>
      <div className="forecast-grid">
        {forecast.map((d) => (
          <div className="day-card" key={d.day}>
            <div className="day">{d.day}</div>
            <div className="icon"><Icon icon={d.icon} /></div>
            <div className="range">Min {Math.round(d.min)}°C - Max {Math.round(d.max)}°C</div>
            <div className="small">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

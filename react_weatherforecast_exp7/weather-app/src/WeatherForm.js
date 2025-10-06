import React, { useState } from "react";

// helper: call OpenWeather endpoints (current + forecast)
const API_KEY = process.env.REACT_APP_WEATHER_KEY;

async function fetchCurrentByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error("City not found or API error");
  return r.json();
}

async function fetchForecastByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error("Forecast not available");
  return r.json();
}

export default function WeatherForm({ onFetchStart, onFetchDone, onError }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return onError("Please enter a city name.");
    try {
      onFetchStart();
      const current = await fetchCurrentByCity(city);
      const forecastRaw = await fetchForecastByCity(city);

      // group forecast list (3-hour points) into daily summaries
      const forecastByDay = groupForecastByDay(forecastRaw.list);

      onFetchDone({ current, forecast: forecastByDay });
    } catch (err) {
      onError(err.message || "Failed to fetch weather.");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city (e.g. London)"
      />
      <button type="submit">Search</button>
      <button
        type="button"
        onClick={() => {
          // optional: geolocation quick fetch
          if (!navigator.geolocation) return onError("Geolocation not supported");
          onFetchStart();
          navigator.geolocation.getCurrentPosition(async (pos) => {
            try {
              const lat = pos.coords.latitude;
              const lon = pos.coords.longitude;
              // fetch by coords (current)
              const curUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
              const forUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
              const [curRes, forRes] = await Promise.all([fetch(curUrl), fetch(forUrl)]);
              if (!curRes.ok || !forRes.ok) throw new Error("Failed to fetch by location");
              const current = await curRes.json();
              const forecastRaw = await forRes.json();
              const forecastByDay = groupForecastByDay(forecastRaw.list);
              onFetchDone({ current, forecast: forecastByDay });
            } catch (err) {
              onError(err.message || "Location fetch failed");
            }
          }, (err) => {
            onError("Geolocation permission denied");
          });
        }}
      >
        Use my location
      </button>
    </form>
  );
}

// utility: group OpenWeather 3-hour forecast into per-day summary
function groupForecastByDay(list) {
  const map = {};
  for (const item of list) {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toLocaleDateString(); // locale date string groups by day
    if (!map[dayKey]) map[dayKey] = [];
    map[dayKey].push(item);
  }
  // create array of days with min/max and midday icon
  const result = Object.entries(map).map(([day, arr]) => {
    const temps = arr.map(i => i.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    // pick icon from the item near midday (index closest to middle)
    const mid = arr[Math.floor(arr.length / 2)];
    const icon = mid.weather[0].icon;
    const desc = mid.weather[0].description;
    return { day, min, max, icon, desc };
  });
  return result;
}

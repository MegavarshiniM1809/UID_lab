import React, { useState } from "react";
import WeatherForm from "./WeatherForm.js";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_KEY; // ✅ correct way

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>WeatherSight</h1>
        <p className="tag">Quick local weather + forecast</p>
      </header>

      <main>
        <WeatherForm
          apiKey={API_KEY} // ✅ pass API key to WeatherForm
          onFetchStart={() => { setLoading(true); setError(""); }}
          onFetchDone={(data) => { setLoading(false); setWeatherData(data); }}
          onError={(msg) => { setLoading(false); setError(msg); }}
        />

        {loading && <div className="status">Loading…</div>}
        {error && <div className="error">{error}</div>}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </main>

      <footer className="footer">Built with OpenWeatherMap</footer>
    </div>
  );
}

export default App;

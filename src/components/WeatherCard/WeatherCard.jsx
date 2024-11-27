import React from "react";
import "./WeatherCard.scss";

export const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const weatherIcon = weather.weather[0]?.icon;

  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="weather-card">
      <div className="weather-card__top">
        <div className="weather-card__icon-container">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={weather.weather[0]?.description || "Weather icon"}
            className="weather-card__icon"
          />
        </div>

        <div className="weather-card__info">
          <p className="weather-card__temp">
            {Math.round(weather.main.temp - 273.15)}°C
          </p>
          <p className="weather-card__condition">{weather.weather[0]?.main}</p>
          <p className="weather-card__description">
            {weather.weather[0]?.description}
          </p>
        </div>
        <div className="weather-card__location">
          <p>
            {weather.name}, {weather.sys.country}
          </p>
          <p className="weather-card__date">{today}</p>
        </div>
      </div>

      <div className="weather-card__divider-horizontal"></div>

      <div className="weather-card__bottom">
        <div className="weather-card__range">
          <span className="weather-card__range-label">Min</span>
          <span className="weather-card__range-value">
            {Math.round(weather.main.temp_min - 273.15)}°C
          </span>
          <div className="weather-card__divider-vertical"></div>
        </div>

        <div className="weather-card__range">
          <span className="weather-card__range-label">Max</span>
          <span className="weather-card__range-value">
            {Math.round(weather.main.temp_max - 273.15)}°C
          </span>
        </div>
      </div>
    </div>
  );
};

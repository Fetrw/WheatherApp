import { Header } from "./components/Header/Header";
import { PopularCities } from "./components/PopularCities/PopularCities";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import { RecentCities } from "./components/RecentCities/RecentCities";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";

import { useEffect, useState } from "react";

import "./App.scss";

export const App = () => {
  const [weather, setWeather] = useState(null);
  const [recentCities, setRecentCities] = useState([]);

  const fetchWeather = async (city) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=575a65a2b99cc2c04a897b40be34421a`
    );
    const data = await response.json();
    setWeather(data);

    const updatedCities = [
      { id: city.id, name: city.name },
      ...recentCities.filter((c) => c.id !== city.id),
    ].slice(0, 5);

    setRecentCities(updatedCities);
    localStorage.setItem("recentCities", JSON.stringify(updatedCities));
  };

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecentCities(storedCities);

    const lastSelectedCity = storedCities[0] || null;

    if (lastSelectedCity) {
      fetchWeather(lastSelectedCity);
    } else {
      const defCity = { id: 698740, name: "Odessa" };
      fetchWeather(defCity);
    }
  }, []);

  return (
    <div className="app">
      <div className="app__wrapper">
        <Header onCitySelect={fetchWeather} />
        <WeatherCard weather={weather} />
      </div>
      <PopularCities onCitySelect={fetchWeather} />
      <RecentCities onCitySelect={fetchWeather} cities={recentCities} />
      <FAQ />
      <Footer />
    </div>
  );
};

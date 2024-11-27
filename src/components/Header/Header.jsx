import React, { useState } from "react";

import "./Header.scss";

export const Header = ({ onCitySelect }) => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const fetchCities = async () => {
    if (search.trim() === "") {
      setCities([]);
      setDropdownOpen(false);
      return;
    }

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/find?q=${search}&appid=575a65a2b99cc2c04a897b40be34421a`
    );
    const data = await response.json();
    setCities(data.list || []);
    setDropdownOpen(true);
  };

  const handleCitySelect = (city) => {
    onCitySelect(city);
    setDropdownOpen(false);
    setSearch("");
  };

  return (
    <header className="header">
      <div className="header__search-box">
        <input
          type="text"
          className="header__input"
          placeholder="Start typing to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchCities()}
        />
        <button className="header__button" onClick={fetchCities}>
          <i className="ico header__icon"></i>
        </button>
      </div>
      {isDropdownOpen && (
        <ul className="header__dropdown">
          {cities.map((city) => (
            <li
              key={city.id}
              className="header__dropdown-item"
              onClick={() => handleCitySelect(city)}
            >
              {city.name}, {city.sys.country}
            </li>
          ))}
          {cities.length === 0 && search && (
            <li className="header__dropdown-item--empty">
              City not found, please try to change your search query
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

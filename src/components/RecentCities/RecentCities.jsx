import React from "react";

import "./RecentCities.scss";

export const RecentCities = ({ onCitySelect, cities }) => {
  return (
    <div className="recent-cities">
      <h2 className="recent-cities__title">Recently Viewed Cities</h2>
      <div className="recent-cities__grid">
        {cities.map((city) => (
          <div
            key={city.id}
            className="recent-cities__card"
            onClick={() => onCitySelect(city)}
          >
            <p className="recent-cities__name">{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

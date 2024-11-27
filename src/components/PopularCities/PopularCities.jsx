import React from "react";
import "./PopularCities.scss";
import NY from "../../assets/images/NY.jpg";
import London from "../../assets/images/london.jpg";
import Dubai from "../../assets/images/dubai.jpg";
import Paris from "../../assets/images/paris.jpg";

const cities = [
  { name: "New York", id: 5128581, image: NY },
  { name: "London", id: 2643743, image: London },
  { name: "Dubai", id: 292223, image: Dubai },
  { name: "Paris", id: 2988507, image: Paris },
];

export const PopularCities = ({ onCitySelect }) => {
  return (
    <div className="popular-cities">
      <h2 className="popular-cities__title">
        Check the weather in most popular cities <br /> in the world
      </h2>
      <div className="popular-cities__grid">
        {cities.map((city) => (
          <div
            key={city.id}
            className="popular-cities__card"
            onClick={() => onCitySelect(city)}
          >
            <img
              src={city.image}
              alt={city.name}
              className="popular-cities__image"
            />
            <div className="popular-cities__overlay">
              <p className="popular-cities__name">{city.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

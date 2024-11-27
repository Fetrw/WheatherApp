import React, { useState } from 'react';
import classNames from 'classnames';

import arrowDown from '../../assets/images/arrow-down.png';
import arrowUp from '../../assets/images/arrow-up.png';

import './FAQ.scss';

export const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const questions = [
    {
      question: 'How to search for weather in my city?',
      answer:
        'To search for weather in your city, use the search bar at the top of the page. Start typing the city name, and select your city from the dropdown.',
    },
    {
      question: 'Why is the weather data not updating?',
      answer:
        'Ensure that you have a stable internet connection. If the issue persists, try refreshing the page or checking back later.',
    },
    {
      question: 'Can I check the weather for multiple cities?',
      answer:
        'Yes, you can search for and view the weather for as many cities as you like. Use the search bar or select from the popular cities list.',
    },
    {
      question: 'How accurate is the weather forecast?',
      answer:
        'Our app retrieves data from OpenWeather, which provides reliable and up-to-date forecasts. However, minor deviations may occur due to unpredictable factors.',
    },
  ];

  return (
    <div className="faq">
      <p className='faq__h1'>Frequently Asked Questions</p>
      {questions.map((item, index) => (
        <div key={index} className="faq__item">
          <div
            className={classNames('faq__question', {
              'faq__question--active': active === index,
            })}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <img
              src={active === index ? arrowUp : arrowDown}
              alt={active === index ? 'Collapse' : 'Expand'}
              className="faq__icon"
            />
          </div>
          <div
            className={classNames('faq__answer', {
              'faq__answer--visible': active === index,
            })}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

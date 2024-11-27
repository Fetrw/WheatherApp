# Weather App

This project is a React-based application that provides weather information for various cities. Users can search for cities, view weather details for popular and recently viewed cities, and explore FAQs related to the app.

## Technologies Used
- React for building the UI.
- SCSS for styling components.
- OpenWeatherMap API for fetching weather data.
- localStorage for persisting recently viewed cities.

## Features

1. **Search Functionality**  
   - Users can search for cities using the input field in the header.  
   - Displays a dropdown with matching city names fetched from the OpenWeatherMap API.  

2. **Default City Weather**  
   - Shows weather details for *Odessa* (default city) if no city is selected during the initial app load.  

3. **Weather Details**  
   - Displays detailed weather information such as temperature, conditions, and descriptions.  
   - Shows minimum and maximum temperatures for the day.  

4. **Popular Cities**  
   - Allows users to quickly view the weather for popular cities like New York, London, Dubai, and Paris.  

5. **Recently Viewed Cities**  
   - Displays the last 5 cities viewed by the user, saved using `localStorage`.

6. **Remember Last City**  
   - The app remembers the last city that was viewed by the user and, upon restarting, it automatically shows the weather for that city. This is achieved by saving the city data in `localStorage`.

7. **FAQ Section**  
   - Provides answers to common questions about the app's functionality.

## Components

- **`Header`**  
  Handles city search and dropdown display for matched results.

- **`WeatherCard`**  
  Displays detailed weather information for the selected city.

- **`PopularCities`**  
  Renders a grid of predefined popular cities with clickable cards.

- **`RecentCities`**  
  Lists recently viewed cities with quick navigation options.

- **`FAQ`**  
  An informational section addressing frequently asked questions.

- **`Footer`**  
  Displays application footer content.

## Data Flow

1. **Fetching Weather**  
   - Fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/api) using city IDs.
   - Updates the `weather` state with the fetched data.  

2. **Storing Recent Cities**  
   - Maintains a list of recently viewed cities in the `recentCities` state.
   - Saves the list in `localStorage` to persist data between sessions.

3. **City Search**  
   - Dynamically fetches matching city names from the OpenWeatherMap API based on the user's search query.

4. **Remember Last City**  
   - On app load, the last selected city is fetched from `localStorage`. If available, its weather is displayed automatically. If no city has been selected before, the default city (Odessa) is shown.

## Installation and Setup

1. Fork the Repository.

2. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Start the application:
   ```bash
   npm start
   ```
5. Start the application:
   ```bash
   http://localhost:3000
   ```

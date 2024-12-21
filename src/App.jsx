import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TextCard from './components/TextCard';
import blueSky from './assets/images/blueSky.jpg';
import storm from './assets/images/storm.jpg';
import rain from './assets/images/rain.jpg';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('London');
  const [BgImage, setBgImage] = useState(blueSky);

  const Sunny_weather = ['Clear sky', 'Few clouds', 'Scattered clouds', 'Broken clouds', 'Overcast clouds', 'Mist'];
  const Rainy = ['Light rain', 'Moderate rain', 'Heavy intensity rain', 'Light snow', 'Snow', 'Heavy snow', 'Shower rain', 'Shower snow', 'Drizzle', 'Light drizzle', 'Rain and snow', 'Freezing rain', 'Sleet'];
  const stormy = ['Thunderstorm', 'Thunderstorm with light rain', 'Thunderstorm with rain', 'Thunderstorm with heavy rain', 'Heavy thunderstorm', 'Thunderstorm with hail', 'Tornado', 'Hurricane', 'Tropical storm', 'Extreme rain', 'Extreme snow'];

  const handleSearch = (newSearchTerm) => {
    if (newSearchTerm) {
      setSearchTerm(newSearchTerm);
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      const api_key = 'a786d5a672e447a98842aba7d39f094b';
      const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${api_key}`;

      try {
        const response = await fetch(api_url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    if (searchTerm) {
      fetchWeatherData();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (weatherData?.weather?.[0]?.description) {
      const description = weatherData.weather[0].description.toLowerCase(); 
      if (Sunny_weather.map(cond => cond.toLowerCase()).includes(description)) {
        setBgImage(blueSky);
      } else if (Rainy.map(cond => cond.toLowerCase()).includes(description)) {
        setBgImage(rain);
      } else if (stormy.map(cond => cond.toLowerCase()).includes(description)) {
        setBgImage(storm);
      } else {
        setBgImage(blueSky); 
      }
    }
  }, [weatherData]);

  return (
    <div
      className="h-[850px] w-full flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>

      <section>
        {weatherData ? (
          <TextCard
            global_classNames="text-4xl min-h-[35%] left-[24.5%] top-[25%] w-[45%] text-center"
            title_classNames="flex justify-center text-4xl flex-row"
            text_classNames="text-3xl"
            title={`${(weatherData.main?.temp - 273.15).toFixed(2)}°C +/- 
                   ${((weatherData.main?.temp_max - weatherData.main?.temp_min) / 2).toFixed(2)}`}
            text={
              <>
                <p>Feels Like: {(weatherData.main?.feels_like - 273.15).toFixed(2)}°C</p>
                <p>Humidity: {weatherData.main?.humidity}%</p>
                <p>Windspeed: {weatherData.wind?.speed}m/s</p>
                <p>Pressure: {weatherData.main?.pressure}hPa</p>
                <p>TimeZone: UTC{weatherData.timezone / 3600 >= 0 ? '+' + (weatherData.timezone / 3600) : (weatherData.timezone / 3600)}</p>
                <p>Longitude: {weatherData.coord?.lon}</p>
                <p>Latitude: {weatherData.coord?.lat}</p>
              </>
            }
          />
        ) : (
          <p className="absolute flex flex-col items-center justify-center top-[40%] left-[50%] 
              transform -translate-x-1/2 -translate-y-1/2 text-lg">
            Loading...
          </p>
        )}
      </section>

      {weatherData && (
        <TextCard
          global_classNames="text-3xl text-center top-[3%]"
          text={
            <>
              <p>Description: {weatherData.weather?.[0]?.description.toUpperCase()}</p>
              <p>LOCATION: {weatherData?.name ?? 'Unknown'}</p>
            </>
          }
        />
      )}
    </div>
  );
};

export default App;


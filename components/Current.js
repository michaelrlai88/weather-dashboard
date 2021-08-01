import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const Current = () => {
  const weather = useContext(WeatherContext);

  return (
    <div>
      <div>{weather.data.currentWeather.name}</div>
      <Image
        src={`http://openweathermap.org/img/wn/${weather.data.currentWeather.weather[0].icon}@4x.png`}
        alt='Picture of weather'
        width={200}
        height={200}
      />
      <div>{weather.data.currentWeather.weather[0].main}</div>
      <br />
    </div>
  );
};

export default Current;

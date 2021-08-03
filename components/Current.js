import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

import theme from '../styles/theme';

const Current = () => {
  const weather = useContext(WeatherContext);

  return (
    <div className='container'>
      <div className='container-image'>
        <Image
          src={`http://openweathermap.org/img/wn/${weather.data.currentWeather.weather[0].icon}@4x.png`}
          alt='Picture of current weather'
          width={200}
          height={200}
        />
      </div>
      <div className='container-info'>
        <div>{weather.data.currentWeather.name}</div>
        <div>{weather.data.currentWeather.weather[0].main}</div>
        <div>{weather.data.currentWeather.main.temp}&deg;F</div>
      </div>

      <style jsx>{`
        .container {
          background-color: lightsalmon;
          text-align: center;
        }

        @media ${theme.breakpoints.md} {
          .container {
            display: flex;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default Current;

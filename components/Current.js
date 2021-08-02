import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import styled from 'styled-components';

import theme from '../styles/theme';

const Container = styled.div`
  background-color: lightsalmon;
  text-align: center;

  ${theme.breakpoints.md} {
    display: flex;
    text-align: left;
  }
`;

const Current = () => {
  const weather = useContext(WeatherContext);

  return (
    <Container>
      <div className='container-image'>
        <Image
          src={`http://openweathermap.org/img/wn/${weather.data.currentWeather.weather[0].icon}@4x.png`}
          alt='Picture of weather'
          width={200}
          height={200}
        />
      </div>
      <div className='container-info'>
        <div>{weather.data.currentWeather.name}</div>
        <div>{weather.data.currentWeather.weather[0].main}</div>
        <div>{weather.data.currentWeather.main.temp}&deg;F</div>
      </div>
    </Container>
  );
};

export default Current;

import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';

const Dashboard = () => {
  const weather = useContext(WeatherContext);

  return (
    <div>
      {weather.data ? (
        <div>
          <Current />
          <Hourly />
          <Daily />
        </div>
      ) : (
        <div>No location yet</div>
      )}
      <br />
      <button onClick={() => console.log(weather.data)}>CHECK</button>
    </div>
  );
};

export default Dashboard;

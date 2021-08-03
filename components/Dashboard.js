import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';

import theme from '../styles/theme';

const Dashboard = () => {
  const weather = useContext(WeatherContext);

  return (
    <div className='container'>
      {weather.data ? (
        <div>
          <div className='container-current-hourly'>
            <Current className='current' />
            <Hourly />
          </div>
          <Daily />
        </div>
      ) : (
        <div>No location yet</div>
      )}
      <br />
      <button onClick={() => console.log(weather.data)}>CHECK</button>

      <style jsx>{`
        @media ${theme.breakpoints.md} {
          .container-current-hourly {
            display: flex;
            max-width: 1000px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

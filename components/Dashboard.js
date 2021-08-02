import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';
import styled from 'styled-components';

import theme from '../styles/theme';

const Container = styled.div`
  .container-current-hourly {
    ${theme.breakpoints.md} {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
    }
  }
`;

const Dashboard = () => {
  const weather = useContext(WeatherContext);

  return (
    <Container>
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
    </Container>
  );
};

export default Dashboard;

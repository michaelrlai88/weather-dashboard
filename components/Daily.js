import Image from 'next/image';
import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

import theme from '../styles/theme';

const Daily = () => {
  const weather = useContext(WeatherContext);

  const unixToWeekday = (unixTime) => {
    const milliseconds = unixTime * 1000;
    const dateObject = new Date(milliseconds);
    const weekday = dateObject.toLocaleString('en-US', {
      weekday: 'long',
    });
    const weekdayShort = weekday.slice(0, 3);
    return weekdayShort;
  };

  return (
    <div className='container'>
      <div className='container-days'>
        {weather.data.oneCall.daily.map((day) => {
          return (
            <div className='container-day' key={day.dt}>
              <div className='weekday'>{unixToWeekday(day.dt)}</div>
              <div className='icon'>
                <Image
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                  alt='Picture of current weather'
                  width={200}
                  height={200}
                />
              </div>
              <div className='high-low'>high low</div>
            </div>
          );
        })}
      </div>
      <button onClick={() => unixToWeekday(1627974000)}>TIME</button>

      <style jsx>{`
        .container {
          background-color: lightseagreen;
        }

        .container-days {
          max-width: 300px;
          margin: 0 auto;
        }

        .container-day {
          background-color: lightcyan;
          display: flex;
          justify-content: space-between;
        }

        .weekday {
          width: 100px;
          background-color: lightgreen;
          display: flex;
          align-items: center;
        }

        .icon {
          width: 50px;
          background-color: lightgreen;
        }

        .high-low {
          width: 100px;
          background-color: lightgreen;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        @media ${theme.breakpoints.md} {
          .container {
            background-color: lightseagreen;
            padding: 0 80px;
          }

          .container-days {
            margin: 0 auto;
            max-width: 1000px;
            background-color: lightpink;
            display: flex;
            justify-content: space-between;
          }

          .container-day {
            width: 70px;
            background-color: lightcyan;
            display: block;
          }

          .weekday {
            width: 100%;
            text-align: center;
            display: block;
          }

          .icon {
            width: 100%;
            text-align: center;
            display: block;
          }

          .high-low {
            width: 100%;
            text-align: center;
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Daily;

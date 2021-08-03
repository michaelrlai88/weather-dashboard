import React, { useState, useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import axios from 'axios';

const Header = () => {
  const [locationInput, setLocationInput] = useState('');
  const weather = useContext(WeatherContext);

  const callApi = async (input) => {
    try {
      console.log('try');
      const response = await axios({
        method: 'get',
        url: `/api/search?location=${input}`,
      });
      console.log('try2');
      console.log(response.data);

      weather.setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (locationInput) {
      callApi(locationInput);
      weather.setData();
      setLocationInput('');
    }
  };

  return (
    <div className='container'>
      <div>Weather Dashboard</div>
      <form>
        <input
          type='text'
          placeholder='Enter city'
          onChange={(e) => setLocationInput(e.target.value)}
          value={locationInput}
        />
        <button onClick={handleSearch}>Search</button>
      </form>

      <style jsx>{`
        .container {
          display: flex;
          background-color: lightcoral;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Header;

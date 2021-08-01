import React, { useState, useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import axios from 'axios';

const Header = () => {
  const [locationInput, setLocationInput] = useState('');
  const weather = useContext(WeatherContext);

  const callApi = async (input) => {
    const url = process.env.SITE_URL;

    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/search?location=${input}`,
      });
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
          height: 50px;
          border-bottom: 1px solid grey;
        }
      `}</style>
    </div>
  );
};

export default Header;

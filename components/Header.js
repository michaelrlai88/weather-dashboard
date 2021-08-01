import React, { useState, useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import axios from 'axios';

const Header = () => {
  const [locationInput, setLocationInput] = useState('');
  const weather = useContext(WeatherContext);

  const callApi = async (input) => {
    const response = await axios.get('/api/search');

    console.log(response.data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    callApi(locationInput);
    setLocationInput('');
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

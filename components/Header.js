import React, { useState } from 'react';

const Header = () => {
  const [locationInput, setLocationInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(locationInput);
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

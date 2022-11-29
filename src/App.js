import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country';

function App() {
  const [country, setCountry] = useState([]);

  const getCountry = async () => {
    const result = await fetch(`https://restcountries.com/v3.1/all`);
    const json = await result.json();
    console.log(json);
    setCountry(json);
  };
  useEffect(() => {
    getCountry();
  }, []);

  const slicedArray = country.slice(0, 6);
  return (
    <div className='App'>
      {slicedArray.map((c, i) => (
        <Country
          key={i}
          name={c.name.official}
          region={c.region}
          map={c.maps.googleMaps}
          flag={c.flag}
          borders={c.borders}
        />
      ))}
    </div>
  );
}

export default App;

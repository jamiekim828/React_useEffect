import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country';

function App() {
  // set state
  const [country, setCountry] = useState([]);

  // fetch data from api and set state
  const getCountry = async () => {
    const result = await fetch(`https://restcountries.com/v3.1/all`);
    const json = await result.json();
    console.log(json);
    setCountry(json);
  };

  // call fetch function in useEffect to render only once
  useEffect(() => {
    getCountry();
  }, []);

  // get the first 6 items from the country array
  const slicedArray = country.slice(0, 6);

  // render Country component
  return (
    <div className='App'>
      <h1 className='header'>Country List</h1>
      <div className='country-wrapper'>
        {slicedArray.map((c, i) => (
          // passing props to Country component
          <Country
            key={i}
            name={c.name.official}
            region={c.region}
            capital={c.capital}
            languages={c.languages}
            map={c.maps.googleMaps}
            flag={c.flags.png}
            borders={c.borders}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

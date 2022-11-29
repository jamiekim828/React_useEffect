import React from 'react';

export default function Country({
  // props from App component
  name,
  common,
  region,
  capital,
  languages,
  map,
  flag,
  borders,
}) {
  // render each country card
  return (
    <div className='country-card'>
      <div className='image'>
        <img src={flag} alt={name} className='flag' />
      </div>
      <div className='title'>{common}</div>
      <div className='content'>
        <p className='country-name'>Official name: {name}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        <p>
          Languages:{''}
          {Object.values(languages).map((l, i) => (
            <li key={i} className='language'>
              {l}
            </li>
          ))}
        </p>
        <a href={`${map}`} target='_blank' rel='noreferrer'>
          Visit map here
        </a>
        <div className='border-div'>
          <ul>
            {borders
              ? borders.map((b, i) => (
                  <li key={i} className='borders'>
                    {b}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

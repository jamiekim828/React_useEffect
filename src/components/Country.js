import React from 'react';

export default function Country({
  name,
  region,
  capital,
  languages,
  map,
  flag,
  borders,
}) {
  return (
    <div className='country-card'>
      <img src={flag} alt={name} />
      <h3 className='country-name'>{name}</h3>
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
  );
}

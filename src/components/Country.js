import React from 'react';

export default function Country({ name, region, map, flag, borders }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Region: {region}</p>
      <h2>{flag}</h2>
      <a href={`${map}`} target='_blank' rel='noreferrer'>
        Visit map here
      </a>
      <ul>{borders ? borders.map((b, i) => <li key={i}>{b}</li>) : null}</ul>
    </div>
  );
}

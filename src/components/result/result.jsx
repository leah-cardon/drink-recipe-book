import React from 'react';

function SearchResult ({ result }) {

  return (
    <div className='result'>
      <div className='thumbnailContainer'>
        <img src={result.strDrinkThumb} className='thumbnail' />
      </div>
      <h1>{result.strDrink}</h1>
    </div>
  );

}

export default SearchResult;
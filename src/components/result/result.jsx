import React from 'react';

function SearchResult ({ result }) {

  return (
    <div>
      <img src={result.strDrinkThumb} />
      <h1>{result.strDrink}</h1>
    </div>
  );

}

export default SearchResult;
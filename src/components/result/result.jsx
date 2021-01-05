import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinkDetails from '../drinkDetail/drinkDetail';

function SearchResult({ result }) {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return (
      <DrinkDetails drink={result} />
    );
  }
  return (
    <div
      className="result"
      onClick={() => setClicked(true)}
    >
      <div className="thumbnailContainer">
        <img
          src={result.strDrinkThumb}
          alt={result.strDrink}
          className="thumbnail"
        />
      </div>
      <h1>{result.strDrink}</h1>
    </div>
  );
}

SearchResult.propTypes = {
  result: PropTypes.shape.isRequired,
};

export default SearchResult;

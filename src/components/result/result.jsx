import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinkDetails from '../drinkDetail/drinkDetail';

function SearchResult({ result, searchOneDrink }) {
  const [clicked, setClicked] = useState(false);

  if (result && clicked) {
    if (!result.strInstructions) {
      searchOneDrink(result.idDrink);
    }
    return (
      <DrinkDetails drink={result} reset={setClicked} />
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
  );ß
}

SearchResult.propTypes = {
  result: PropTypes.shape.isRequired,
  searchOneDrink: PropTypes.func.isRequired,
};

export default SearchResult;

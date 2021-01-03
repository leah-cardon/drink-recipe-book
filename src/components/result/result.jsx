import React from 'react';
import PropTypes from 'prop-types';

function SearchResult({ result }) {
  return (
    <div className="result">
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

import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from '../result/result';

function SearchResults({ results, searchOneDrink }) {
  let resultComponents = [];

  if (results === null) {
    return (
      <div>
        No results found. Please search again
      </div>
    );
  }
  if (results === undefined) {
    return '';
  }

  resultComponents = results.map((item) => (
    <SearchResult
      key={item.idDrink}
      result={item}
      searchOneDrink={searchOneDrink}
    />
  ));
  return (
    <div className="resultsContainer centered">
      {resultComponents}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf.isRequired,
  searchOneDrink: PropTypes.func.isRequired,
};

export default SearchResults;

import React from 'react';
import SearchResult from '../result/result.jsx';

function SearchResults ({ results }) {

  let resultComponents = [];

  if (results === null) {
    return (
      <div>
        No results found. Please search again
      </div>);
  } else if (results === undefined) {
    return '';
  } else {
    resultComponents = results.map((item, index) => {
      return (
        <SearchResult key={index} result={item} />
      );
    });
    return (
      <div className='resultsContainer centered'>
        {resultComponents}
      </div>);
  }

};

export default SearchResults;
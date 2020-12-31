import React from 'react';

function SearchResults ({ results }) {

  let resultComponents = [];

  if (results === null) {
    return (
      <div>
        No results found. Please search again
      </div>);
  } else if (results === undefined) {
    return <div></div>;
  } else {
    resultComponents = results.map((item, index) => {
      return (
        <div key={index}>{item.strDrink}</div>
      );
    });
    return (
      <div>
        {resultComponents}
      </div>);
  }

};

export default SearchResults;
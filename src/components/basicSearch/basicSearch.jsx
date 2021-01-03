import React from 'react';
import PropTypes from 'prop-types';

function BasicSearch({ search, input, handleChange }) {
  return (
    <form className="centered basic searchBar" onSubmit={search}>
      <input
        type="text"
        name="searchInput"
        placeholder="Mojito, gin, pisco, grenadine..."
        value={input}
        onChange={handleChange}
      />
      <div />
      <input type="submit" value="Search" />
    </form>
  );
}

BasicSearch.propTypes = {
  search: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BasicSearch;

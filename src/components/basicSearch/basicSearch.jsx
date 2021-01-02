import React from 'react';


function BasicSearch ({ search, input, handleChange }) {
  return (
    <form className='basic' onSubmit={search} className='centered searchBar'>
      <input type='text'
        name='searchInput'
        placeholder='Mojito, gin, pisco, grenadine...'
        value={input}
        onChange={handleChange} />
      <div></div>
      <input type='submit' value='Search' />
    </form>
  );
}

export default BasicSearch;
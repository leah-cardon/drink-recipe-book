import React from 'react';


function BasicSearch ({ search, input, handleChange }) {
  return (
    <form className='basic' onSubmit={search} >
      <input type='text'
        name='searchInput'
        value={input}
        onChange={handleChange} />
      <input type='submit' value='Submit' />
    </form>
  );
}

export default BasicSearch;
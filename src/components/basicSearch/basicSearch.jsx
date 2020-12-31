import React from 'react';


function BasicSearch (props) {
  return (
    <form className='basic'>
      <input type='text'
        name='searchInput'
        value={props.input}
        onChange={props.handleChange} />
      <button onClick={props.search}>Search</button>
    </form>
  );
}

export default BasicSearch;
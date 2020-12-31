import React from 'react';


function BasicSearch (props) {
  return (
    <form className='basic' onSubmit={props.search} >
      <input type='text'
        name='searchInput'
        value={props.input}
        onChange={props.handleChange} />
      <input type='submit' value='Submit' />
    </form>
  );
}

export default BasicSearch;
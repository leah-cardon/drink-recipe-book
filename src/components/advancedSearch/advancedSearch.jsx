import React from 'react';


function AdvancedSearch (props) {
  return (
    <form className='centered'>
      <input type='text' placeholder='ingredient 1' />
      <input type='text' placeholder='ingredient 2' />
      <input type='text' placeholder='ingredient 3' />
      <input type='text' placeholder='ingredient 4' />
      <input type='text' placeholder='ingredient 5' />
      <label>
        <input type='radio' value='both' name='non/alcoholic' checked='checked' /> Alcoholic & non-alcoholic
      </label>
      <label>
        <input type='radio' value='Alcoholic only' name='non/alcoholic' /> Alcoholic only
      </label>
      <label>
        <input type='radio' value='Non-alcoholic only' name='non/alcoholic' /> Non-alcoholic only
      </label>
      <input type='submit' value='Search' />
    </form>
  );
};

export default AdvancedSearch;
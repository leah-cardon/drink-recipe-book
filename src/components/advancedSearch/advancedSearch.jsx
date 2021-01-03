import React from 'react';

function AdvancedSearch(props) {
  return (
    <form className="centered">
            {/* <input type='text'
        name='searchInput'
        placeholder='Mojito, gin, pisco, grenadine...'
        value={input}
        onChange={handleChange} /> */}
      <input type="text" placeholder="ingredient 1" />
      <input type="text" placeholder="ingredient 2" />
      <input type="text" placeholder="ingredient 3" />
      <input type="text" placeholder="ingredient 4" />
      <input type="text" placeholder="ingredient 5" />
      <label htmlFor="both">
        <input type="radio" value="both" id="both" name="non/alcoholic" checked="checked" />
        Alcoholic & non-alcoholic
      </label>
      <label htmlFor="alcoholic">
        <input type="radio" value="Alcoholic only" id="alcoholic" name="non/alcoholic" />
        Alcoholic only
      </label>
      <label htmlFor="non-alcoholic">
        <input type="radio" value="Non-alcoholic only" id="non-alcoholic" name="non/alcoholic" />
        Non-alcoholic only
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}

export default AdvancedSearch;

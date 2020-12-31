import React from 'react';
import axios from 'axios';

import BasicSearch from '../basicSearch/basicSearch.jsx';
import AdvancedSearch from '../advancedSearch/advancedSearch.jsx';
import SearchResults from '../results/results.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      search: 'simple',
      searchInput: '',
      searchResults: []
    }
    this.switchSearches = this.switchSearches.bind(this);
    this.search = this.search.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  switchSearches () {
    const swapped = this.state.search === 'basic' ? 'advanced' : 'basic';
    this.setState({
      search: swapped
    });
  }

  handleInputChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(name + ': ' + this.state[name]);
  }

  search (event) {
    event.preventDefault();

    let input = this.state.searchInput;
    let drinks = [];
    let drinksWithIngredient = [];
    let allResults = [];

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input)
    .then((results) => {
      drinks = results.data.drinks;
    })
    .then(() => {
      return axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + input)
      .then((results) => {
        drinksWithIngredient = results.data.drinks;
      })
      .catch((err) => console.error(err));
    })
    .then(() => {
      if (drinks) {
        allResults = drinks;
      }
      if (drinksWithIngredient) {
        allResults = allResults.concat(drinksWithIngredient);
      }
      if (!drinks && !drinksWithIngredient) {
        allResults = null;
      }
      this.setState({
        searchResults: allResults
      });
    })
    .catch((err) => console.error(err));
  }

  render () {
    return (
      <div className='appContainer'>
        <h1>My Cocktail Recipe Book</h1>
        <a href='/profile'>My Profile</a>
        {
          this.state.search === 'basic' ?
          <BasicSearch
            search={this.search}
            handleChange={this.handleInputChange}
            input={this.state.searchInput}
          />
          :
          <AdvancedSearch
            search={this.search}
            handleChange={this.handleInputChange}
            input={this.state.searchInput}
          />
        }
        <button onClick={this.switchSearches}>{this.state.search === 'basic' ? 'Advanced Search' : 'Simple Search'}</button>
        <SearchResults results={this.state.searchResults} />

      </div>
    );
  }
}

export default App;
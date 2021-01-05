import React from 'react';
import axios from 'axios';
import BasicSearch from '../basicSearch/basicSearch';
import AdvancedSearch from '../advancedSearch/advancedSearch';
import SearchResults from '../results/results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'basic',
      searchResults: [],
      // profileIsDisplayed: false,
    };
    this.switchSearches = this.switchSearches.bind(this);
    this.search = this.search.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setSearchResults = this.setSearchResults.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  setSearchResults(results) {
    this.setState({
      searchResults: results,
    });
  }

  switchSearches() {
    this.setState((prevState) => ({
      search: prevState.search === 'basic' ? 'advanced' : 'basic',
    }));
  }

  search(input) {
    let drinks = [];
    let drinksWithIngredient = [];
    let allResults = [];

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
      .then((results) => {
        drinks = results.data.drinks;
      })
      .then(() => axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`)
        .then((results) => {
          drinksWithIngredient = results.data.drinks;
        })
        .catch((err) => console.error(err)))
      .then(() => {
        if (drinks) {
          allResults = drinks;
        } else {
          allResults = [];
        }
        if (drinksWithIngredient) {
          allResults = allResults.concat(drinksWithIngredient);
        }
        if (!drinks && !drinksWithIngredient) {
          allResults = null;
        }
        this.setState({
          searchResults: allResults,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { search, searchInput, searchResults } = this.state;

    return (
      <>
        <div className="content">
          <div className="centered header">
            <div className="centered">
              <h1 className="title">Bar Book</h1>
            </div>
          </div>
          <div className="profileLink">
            <a href="/profile">My Profile</a>
          </div>
          <div className="spacer" />
          {
            search === 'basic' ? (
              <BasicSearch
                search={this.search}
                handleChange={this.handleInputChange}
                input={searchInput}
              />
            )
              : (
                <AdvancedSearch
                  search={this.search}
                  handleChange={this.handleInputChange}
                  input={searchInput}
                  setSearchResults={this.setSearchResults}
                />
              )
          }
          <div className="spacer" />
          <button
            type="button"
            className="switchSearches"
            onClick={this.switchSearches}
          >
            {search === 'basic' ? 'Advanced Search' : 'Simple Search'}
          </button>
          <div />
          <SearchResults results={searchResults} />
        </div>
        <div className="spacer" />
        <div className="footer" />
      </>
    );
  }
}

export default App;

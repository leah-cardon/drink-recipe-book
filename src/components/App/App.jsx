import React from 'react';
import BasicSearch from '../basicSearch/basicSearch.jsx';
import AdvancedSearch from '../advancedSearch/advancedSearch.jsx';
import SearchResults from '../results/results.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      search: 'simple'
    }

    this.switchSearches = this.switchSearches.bind(this);
  }

  switchSearches () {
    const swapped = this.state.search === 'simple' ? 'advanced' : 'simple';

    this.setState({
      search: swapped
    });
    console.log('new search: ', this.state.search);
  }

  render () {
    return (
      <div>
        <h1>My Cocktail Recipe Book</h1>
        <a href='/profile' >My Profile</a>
        <BasicSearch />
        <AdvancedSearch />
        <button onClick={this.switchSearches}>{this.state.search === 'simple' ? 'Advanced Search' : 'Simple Search'}</button>
        <SearchResults />

      </div>
    );
  }
}

export default App;
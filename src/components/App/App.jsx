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
    const swapped = this.state.search === 'basic' ? 'advanced' : 'basic';
    this.setState({
      search: swapped
    });
  }

  render () {
    return (
      <div>
        <h1>My Cocktail Recipe Book</h1>
        <a href='/profile' >My Profile</a>
        {this.state.search === 'basic' ? <BasicSearch /> : <AdvancedSearch />}
        <button onClick={this.switchSearches}>{this.state.search === 'basic' ? 'Advanced Search' : 'Simple Search'}</button>
        <SearchResults />

      </div>
    );
  }
}

export default App;
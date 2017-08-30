import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class Search extends React.Component {

  constructor(props){
    super(props);
    this.showSearchBar = this.showSearchBar.bind(this);
    this.showSearchResults = this.showSearchResults.bind(this);
    this.renderStories = this.renderStories.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  showSearchBar(e) {
    e.stopPropagation();
    this.props.showSearchBar();
  }

  showSearchResults(e) {
    e.stopPropagation();
    this.props.showSearchResults();
  }

  activateClearZone() {
    this.searchClearer.className = 'search-bar-clearer active';
  }

  updateResults(event){
    const searchQuery = event.target.value;
  
    if ( searchQuery.length < 3 ) {
      this.props.clearSearchResults();
      return;
    }

    this.props.sendSearchQuery(searchQuery)
  }

  renderStories() {
    if ( this.props.storyResults.length === 0 ) return;
    if ( !this.props.searchResultsVisible ) return;
    
    const storiesList = this.props.storyResults.map( story => { 
      return(
          <li className="search-list-item" key={`story-id-${story.id}`}>
            <Link to={`/stories/${story.id}`} className={'story-search-link'} onClick={this.props.clearSearchResults}>
              
                <img className="search-story-img" src={story.story_img_url} />
                <span>{ story.title }</span>
                
            </Link>
          </li>
      );
    });

    return (
      <div className="stories-search-list-container">
        <span>Stories</span>
        <ul className="search-list sub-search-list">
          {storiesList}
        </ul>
      </div>
    );
  }

  renderUsers() {

  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-bar-clearer"
          onClick={ this.clearSearch }
          ref={ el => this.searchClearer = el } > 
        </div>
        <div className="search-input-div">
          <img onClick={this.showSearchBar} id="search-glass" src={window.staticImages.searchGlass}/>
          <input ref={ el => this.searchInput = el } 
            className={this.props.searchBarVisible ? "input-fade-in" : "inactive"} 
            placeholder="Search" onChange={this.updateResults} 
            onClick={this.showSearchResults}/>
        </div>
        <div className="search-list-container">
  
            { this.renderStories() }
          
        </div>
      </div>
    );
  }
}

export default Search; 
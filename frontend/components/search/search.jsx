import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class Search extends React.Component {

  constructor(props){
    super(props);

    this.renderStories = this.renderStories.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(event){
    const searchQuery = event.target.value;
  
    if ( searchQuery.length < 3 ) {
      this.props.clearSearchResults();
      return;
    }

    this.props.sendSearchQuery(searchQuery);
  }

  renderStories() {
    if ( this.props.storyResults.length === 0 ) return;
    
    const storiesList = this.props.storyResults.map( story => {
      const searchStoryBody = story.body.slice(0, 30); 
      return(
          <li className="search-list-item" key={`story-id-${story.id}`}>
            <Link to={`/stories/${story.id}`} onClick={this.clearSearch}>
              <div className="search-story-item">
                <img className="search-story-img" src={story.story_img_url} />
                { story.title }
              </div>   
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
        <input placeholder="Search" onChange={this.updateResults}/>
        <div className="search-list-container">
          
            { this.renderStories() }
          
        </div>
      </div>
    );
  }
}

export default Search; 
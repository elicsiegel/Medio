import React from 'react';
import StoriesIndexItem from '../stories/stories_index_item';

class UserProfile extends React.Component {

  componentDidMount() {
    // request stories from the API 
    if (this.props.user === undefined) {
      this.props.fetchUser(this.props.match.params.userId); 
    }
    if (this.props.userStories.length <= 1) {
      this.props.fetchStories(); 
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user === undefined) {
      this.props.fetchUser(newProps.match.params.userId); 
    }   
  }

  stylizeDate(created_at) {
    const date = new Date(created_at);

    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dayOfMonth = date.getDate();

    return `${months[month]} ${year}`;
  }

  render() {
    const userArticleItems = this.props.userStories.map((story) => {
          return <StoriesIndexItem createBookmark={this.props.createBookmark} deleteBookmark={this.props.deleteBookmark}
                    currentUser={this.props.currentUser} story={story} key={`story-follower-key${story.id}`}/>
        });

    let authorInfo;
    if (this.props.user) {
      authorInfo = (
        <div className="author-detail">
          <img id="author-image" src={this.props.user.user_img_url} />
          <h4>{this.props.user.username}</h4> 
          <p>Member Since: {this.stylizeDate(this.props.user.created_at)}</p>
        </div>
      );
    }

    return (
      <div>
        {authorInfo}
        <div className="storiesIndexTitle">
          <h4>Articles Written by this Author</h4>
        </div>
        <div className="storiesIndexContainer">
          {userArticleItems}
        </div>
      </div>
    );
  }
}

export default UserProfile; 
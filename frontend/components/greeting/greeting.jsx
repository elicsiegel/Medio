import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({logout, currentUser}) => {
  const createStoryLink = <Link to='/stories/new'>Write a Story</Link>

  if (currentUser) {
    return(
      <div className='nav-user-welcome'>
        {createStoryLink}
        <Link to='/bookmarks'>Bookmarks</Link>
        <h3>Welcome, {currentUser.username}!</h3>
        <button onClick={logout}>Log Out</button>
        <a href="https://github.com/elicsiegel/Medio">
          <svg width="24" height="24">
            <image width="24" height="24" xlinkHref={window.staticImages.github_img} />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/eli-siegel-a26a3b73/">
          <svg width="24" height="24">
            <image width="24" height="24" xlinkHref={window.staticImages.linkedIn_img} />
          </svg>
        </a>
      </div>
    );
  } else {
    return(
      <div className="session-links">
        {createStoryLink}
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        <a href="https://github.com/elicsiegel/Medio">
          <svg width="24" height="24">
            <image width="24" height="24" xlinkHref={window.staticImages.github_img} />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/eli-siegel-a26a3b73/">
          <svg width="24" height="24">
            <image width="24" height="24" xlinkHref={window.staticImages.linkedIn_img} />
          </svg>
        </a>
      </div>
    );
  }

};

export default Greeting;
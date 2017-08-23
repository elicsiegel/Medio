import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({logout, currentUser}) => {
  const createStoryLink = <Link to='/stories/new'>Write a Story</Link>

  if (currentUser) {
    return(
      <div className='nav-user-welcome'>
        {createStoryLink}
        <h3>Welcome, {currentUser.username}!</h3>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return(
      <div className="session-links">
        {createStoryLink}
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    );
  }

};

export default Greeting;
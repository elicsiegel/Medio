import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Medio</h1>, root);
});


// $.ajax({
//   method: 'POST', 
//   url: '/api/users',
//   data: { user: { username: 'eli', password: 123456 } }
// }); 

// $.ajax({
//   method: 'POST', 
//   url: '/api/session',
//   data: { user: { username: 'eli', password: 123456 } }
// });
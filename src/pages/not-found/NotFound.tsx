import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>🚧 Page under construction</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ height: '100%', margin: '25rem auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem' }}>🚧 Page under construction 🚧</h1>
      <p style={{ fontSize: '1.8rem' }}>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}

export default NotFound;

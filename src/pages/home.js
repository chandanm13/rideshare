import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicle-type-table">Vehicle Types</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the application.</p>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/chandan/Desktop/RideShare/rideshare/src/App.css';

const Home = () => {
  const handleLogout = () => {
    console.log('User logged out');
  };

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
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the application.</p>
      </div>
    </div>
  );
};

export default Home;

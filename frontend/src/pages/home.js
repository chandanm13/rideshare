// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {

  const handleLogout = () => {
    // Implement logout functionality if needed
  };

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/"><h4>Home</h4></Link>
          </li>
          <li>
            <Link to="/vehicle-type-table">Vehicle Types</Link>
          </li>
          <li>
            <Link to="/my-bookings">My Bookings</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content">
        <h1>RideShare</h1>
        <p>We're excited to bring convenience, sustainability, and community together with our innovative carpooling platform.</p>
        <p>By sharing rides, we're not just saving time and money, but also reducing our carbon footprint.</p>
        <p>Join us in creating a greener, more connected future, one ride at a time.</p>
      </div>
    </div>
  );
};

export default Home;

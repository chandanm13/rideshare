import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/chandan/Desktop/RideShare/rideshare/src/App.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const Data = [
      {
        reference: 'BK001',
        date: '2024-05-01',
        vehicleType: 'Sedan',
        driver: 'John Doe',
        status: 'Confirmed',
        otp: '1234',
        cost: '25.00'
      },
      {
        reference: 'BK002',
        date: '2024-05-02',
        vehicleType: 'SUV',
        driver: 'Jane Smith',
        status: 'Pending',
        otp: '5678',
        cost: '35.00'
      },
      {
        reference: 'BK003',
        date: '2024-05-03',
        vehicleType: 'Hatchback',
        driver: 'Mike Johnson',
        status: 'Cancelled',
        otp: '9012',
        cost: '15.00'
      }
    ];
    setBookings(Data);
  }, []);

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
          <li>
            <Link to="/my-bookings"><h4>My Bookings</h4></Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content my-bookings">
        <h1>My Bookings</h1>
        <table>
          <thead>
            <tr>
              <th>Booking Reference</th>
              <th>Booking Date</th>
              <th>Vehicle Type</th>
              <th>Assign Driver</th>
              <th>Booking Status</th>
              <th>OTP</th>
              <th>Trip Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.reference}</td>
                  <td>{booking.date}</td>
                  <td>{booking.vehicleType}</td>
                  <td>{booking.driver}</td>
                  <td>{booking.status}</td>
                  <td>{booking.otp}</td>
                  <td>{booking.cost}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-records">No records to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;

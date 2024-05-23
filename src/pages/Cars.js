import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/chandan/Desktop/RideShare/rideshare/src/App.css';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const Data = [
      {
        createDate: '2024-05-01',
        driver: 'John Doe',
        vehicleType: 'Sedan',
        registrationNumber: 'ABC123',
        brandName: 'Toyota',
        modelNumber: 'Camry',
        otherInfo: 'N/A',
        image: 'N/A',
        activeStatus: 'Active',
        approved: 'Yes'
      },
      {
        createDate: '2024-05-02',
        driver: 'Jane Smith',
        vehicleType: 'SUV',
        registrationNumber: 'XYZ456',
        brandName: 'Honda',
        modelNumber: 'CRV',
        otherInfo: 'N/A',
        image: 'N/A',
        activeStatus: 'Inactive',
        approved: 'No'
      }
    ];
    setCars(Data);
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
            <Link to="/my-bookings">My Bookings</Link>
          </li>
          <li>
            <Link to="/cars"><h4>Cars</h4></Link>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content cars">
        <h1>Cars</h1>
        <table>
          <thead>
            <tr>
              <th>Create Date</th>
              <th>Driver</th>
              <th>Vehicle Type</th>
              <th>Vehicle Registration Number</th>
              <th>Vehicle Make / Brand Name</th>
              <th>Vehicle Model No</th>
              <th>Other Vehicle or Driver Info</th>
              <th>Image</th>
              <th>Active Status</th>
              <th>Approved</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.length > 0 ? (
              cars.map((car, index) => (
                <tr key={index}>
                  <td>{car.createDate}</td>
                  <td>{car.driver}</td>
                  <td>{car.vehicleType}</td>
                  <td>{car.registrationNumber}</td>
                  <td>{car.brandName}</td>
                  <td>{car.modelNumber}</td>
                  <td>{car.otherInfo}</td>
                  <td>{car.image}</td>
                  <td>{car.activeStatus}</td>
                  <td>{car.approved}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="no-records">No records to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cars;

import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/chandan/Desktop/RideShare/rideshare/src/App.css';
import economyImage from 'C:/Users/chandan/Desktop/RideShare/rideshare/src/images/economy.jpg';
import comfortImage from 'C:/Users/chandan/Desktop/RideShare/rideshare/src/images/comfort.jpg';
import exclusiveImage from 'C:/Users/chandan/Desktop/RideShare/rideshare/src/images/exclusive.jpg';


const VehicleTypeTable = () => {
  const handleLogout = () => {
    console.log('User logged out');
  };

  const vehicleTypes = [
    {
      name: 'Economy',
      image: economyImage,
      baseFare: 10,
      distanceRate: 5,
      ratePerHour: 5,
      minimumFare: 10,
      convenienceFees: 15,
      convenienceFeeType: 'Percentage',
      fleetAdminCommission: 5,
      extraInfo: 'Capacity: 3, Type: Taxi'
    },
    {
      name: 'Comfort',
      image: comfortImage, 
      baseFare: 12,
      distanceRate: 8,
      ratePerHour: 6,
      minimumFare: 20,
      convenienceFees: 15,
      convenienceFeeType: 'Percentage',
      fleetAdminCommission: 10,
      extraInfo: 'Capacity: 4, Type: HatchBack'
    },
    {
      name: 'Exclusive',
      image: exclusiveImage, 
      baseFare: 15,
      distanceRate: 10,
      ratePerHour: 8,
      minimumFare: 30,
      convenienceFees: 15,
      convenienceFeeType: 'Percentage',
      fleetAdminCommission: 15,
      extraInfo: 'Capacity: 4, Type: Sedan'
    }
  ];

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicle-type-table"><h4>Vehicle Types</h4></Link>
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
        <h1>Vehicle Types</h1>
        <div className="vehicle-type-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Base Fare</th>
                <th>Distance Rate Per (Km or Mile)</th>
                <th>Rate Per Hour</th>
                <th>Minimum Fare</th>
                <th>Convenience Fees</th>
                <th>Convenience Fee Type</th>
                <th>Fleet/Admin Commission</th>
                <th>Extra Information</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicleTypes.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.name}</td>
                  <td><img src={vehicle.image} alt={vehicle.name} className="vehicle-image" /></td>                  <td>{vehicle.baseFare}</td>
                  <td>{vehicle.distanceRate}</td>
                  <td>{vehicle.ratePerHour}</td>
                  <td>{vehicle.minimumFare}</td>
                  <td>{vehicle.convenienceFees}</td>
                  <td>{vehicle.convenienceFeeType}</td>
                  <td>{vehicle.fleetAdminCommission}</td>
                  <td>{vehicle.extraInfo}</td>
                  <td>
                    <button>Cancellation Slabs</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleTypeTable;

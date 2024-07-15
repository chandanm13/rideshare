import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import VehicleTypeTable from './pages/VehicleTypeTable';
import Home from './pages/home';
import MyBookings from './pages/Mybookings';
import Cars from './pages/Cars';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/vehicle-type-table" element={<VehicleTypeTable />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

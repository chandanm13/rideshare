// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import VehicleTypeTable from './pages/VehicleTypeTable';
import CancellationSlabs from './CancellationSlabs'; // Create this component
import EditVehicle from './EditVehicle'; // Create this component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<VehicleTypeTable />} />
            <Route path="/cancellation-slabs" element={<CancellationSlabs />} />
            <Route path="/edit-vehicle" element={<EditVehicle />} />
          </Routes>
        </header>
      </div>
    </Router>
    
  );
}

export default App;

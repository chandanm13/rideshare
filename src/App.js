// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import VehicleTypeTable from './pages/VehicleTypeTable';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle-type-table" element={<VehicleTypeTable />} />
          </Routes>
        </header>
      </div>
    </Router>
    
  );
}

export default App;

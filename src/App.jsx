import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BillUseState from './components/BillUseState.jsx';
import BillUseReducer from './components/BillUseReducer.jsx';
import BillRedux from './components/BillRedux.jsx';

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center">🍔 FastFood Billing System</h2>
        <nav className="nav justify-content-center mb-4">
          <Link className="btn btn-outline-primary mx-2" to="/usestate">useState</Link>
          <Link className="btn btn-outline-success mx-2" to="/usereducer">useReducer</Link>
          <Link className="btn btn-outline-danger mx-2" to="/redux">Redux Toolkit</Link>
        </nav>

        <Routes>
          <Route path="/usestate" element={<BillUseState />} />
          <Route path="/usereducer" element={<BillUseReducer />} />
          <Route path="/redux" element={<BillRedux />} />
          <Route path="/" element={<div className="text-center text-muted">Please select a billing method above.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

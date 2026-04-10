import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Slogin  from './Site/Slogin';
import  Register  from './Site/Register';
import  Sdashboard  from './Site/Sdashboard';
import { Snav } from './Snav';

export const Srouting = () => {
    return (
        <Router>
            <Snav />
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/Slogin" element={<Slogin />} />
                <Route path="/Sdashboard" element={<Sdashboard />} />
            </Routes>
        </Router>
    );
}

export default Srouting;
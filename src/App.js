import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import BookingDetailsTable from './Pages/Admin/AllBookings';
import AdminUpdateForm from './Pages/Admin/AgentUpdateForm';
import AdminDasboard from './Pages/Admin/AdminDashboard'
import Login from './Pages/Login';
import './App.css';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import AboutUs from './Pages/AboutUs';
import TravelPlan1 from './Pages/TravelPlans';
import Payments from './Pages/Payments';
import BookingDetail from './Pages/BookingDetail';
import Profile from './Pages/Profile'
import AdminLogin from './Pages/Admin/AdminLogin';


function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/AdminUpdateForm" element={<AdminUpdateForm  />} />
      <Route path="/Admin" element={<AdminLogin  />} />
        <Route path="/" element={<Login  />} />
        <Route path="/Welcome" element={<Welcome  />} />
        <Route path="/plans" element={<TravelPlan1 />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookingdetail" element={<BookingDetail />} />
        <Route path="/AdminBoard" element={<AdminDasboard />} />
        <Route path="/BookingDetailsTable" element={<BookingDetailsTable />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

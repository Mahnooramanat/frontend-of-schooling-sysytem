import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminRegister from './pages/Admin';
// import Profile from './pages/Profile'; // Your Profile component
// import Account from './pages/Account'; // Your Account component
// import Dashboard from './pages/Dashboard'; // Your Dashboard component
// import Logout from './pages/Logout'; 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login />}/> 
            <Route path="/admin" element={<AdminRegister />} />
           {/* /* <Route path="/profile" element={<Profile/>} />
          <Route path="/account"element ={<Account/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/logout" element={<Logout/>} /> * */}
        </Routes>
      </Router>
    </>
  );
}

export default App;


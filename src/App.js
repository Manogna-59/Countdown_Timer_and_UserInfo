import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import UserInfo from './UserInfo';
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', fontFamily:"inherit"}}>
        <nav style={{ marginBottom: '20px'}}>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'Blue', padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', ':hover': { backgroundColor: 'Black' } }}>Countdown Timer</Link>
            </li>
            <li style={{ display: 'inline' }}>
              <Link to="/userinfo" style={{ textDecoration: 'none', color: 'Blue', padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', ':hover': { backgroundColor: 'grey' } }}>User Info</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<CountdownTimer />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

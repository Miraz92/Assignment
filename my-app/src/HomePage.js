import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
        <h2>Smile Studio</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Book an Appointment</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default HomePage;

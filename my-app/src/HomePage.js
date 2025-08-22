import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './HomePage.css';
import { FaHome, FaConciergeBell, FaUserMd, FaStar, FaPhone } from 'react-icons/fa';

const HomePage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);

  const services = ['Teeth Whitening', 'Check-up', 'Cleaning', 'Braces'];
  const doctors = ['Dr. Smith', 'Dr. Jones', 'Dr. Williams', 'Dr. Brown'];

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="homepage">
      <div className="sidebar">
        <h2>Smile Studio</h2>
        <ul className="sidebar-features">
          <li><FaHome /> Home</li>
          <li><FaConciergeBell /> Services</li>
          <li><FaUserMd /> Doctors</li>
          <li><FaStar /> Reviews</li>
          <li><FaPhone /> Contact</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Book an Appointment</h1>
        <div className="selection-boxes">
          <div className="selection-box">
            {selectedService && <div className="box-label">Service</div>}
            <div className="box-header" onClick={() => setShowServiceDropdown(!showServiceDropdown)}>
              <span>{selectedService || 'Select Service'}</span>
              <span>▼</span>
            </div>
            {showServiceDropdown && (
              <ul className="dropdown-list">
                {services.map(service => (
                  <li key={service} onClick={() => { setSelectedService(service); setShowServiceDropdown(false); }}>
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="selection-box">
            {selectedDoctor && <div className="box-label">Doctors</div>}
            <div className="box-header" onClick={() => setShowDoctorDropdown(!showDoctorDropdown)}>
              <span>{selectedDoctor || 'Select Doctor'}</span>
              <span>▼</span>
            </div>
            {showDoctorDropdown && (
              <ul className="dropdown-list">
                {doctors.map(doctor => (
                  <li key={doctor} onClick={() => { setSelectedDoctor(doctor); setShowDoctorDropdown(false); }}>
                    {doctor}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="calendar-container">
          <Calendar onChange={onChange} value={date} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

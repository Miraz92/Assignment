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
  const [selectedTime, setSelectedTime] = useState(null);
  const [activePage, setActivePage] = useState('Services'); // Default to Services

  const services = ['Teeth Whitening', 'Check-up', 'Cleaning', 'Braces'];
  const doctors = ['Dr. Smith', 'Dr. Jones', 'Dr. Williams', 'Dr. Brown'];
  const times = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'];

  const allDoctors = [
    { id: 1, name: 'Dr. Alice Smith', email: 'alice.smith@example.com', pic: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=AS' },
    { id: 2, name: 'Dr. Bob Johnson', email: 'bob.johnson@example.com', pic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=BJ' },
    { id: 3, name: 'Dr. Carol White', email: 'carol.white@example.com', pic: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=CW' },
    { id: 4, name: 'Dr. David Green', email: 'david.green@example.com', pic: 'https://via.placeholder.com/150/FFFF00/000000?text=DG' },
    { id: 5, name: 'Dr. Emily Brown', email: 'emily.brown@example.com', pic: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=EB' },
    { id: 6, name: 'Dr. Frank Black', email: 'frank.black@example.com', pic: 'https://via.placeholder.com/150/00FFFF/000000?text=FB' },
    { id: 7, name: 'Dr. Grace Lee', email: 'grace.lee@example.com', pic: 'https://via.placeholder.com/150/800080/FFFFFF?text=GL' },
    { id: 8, name: 'Dr. Henry Kim', email: 'henry.kim@example.com', pic: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=HK' },
    { id: 9, name: 'Dr. Ivy Chen', email: 'ivy.chen@example.com', pic: 'https://via.placeholder.com/150/A52A2A/FFFFFF?text=IC' },
    { id: 10, name: 'Dr. Jack Davis', email: 'jack.davis@example.com', pic: 'https://via.placeholder.com/150/808080/FFFFFF?text=JD' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4; // Display 4 doctors per page

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = allDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(allDoctors.length / doctorsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="homepage">
      <div className="sidebar">
        <h2>Smile Studio</h2>
        <ul className="sidebar-features">
          <li className={activePage === 'Home' ? 'selected-sidebar-item' : ''} onClick={() => setActivePage('Home')}><FaHome /> Home</li>
          <li className={activePage === 'Services' ? 'selected-sidebar-item' : ''} onClick={() => setActivePage('Services')}><FaConciergeBell /> Services</li>
          <li className={activePage === 'Doctors' ? 'selected-sidebar-item' : ''} onClick={() => setActivePage('Doctors')}><FaUserMd /> Doctors</li>
          <li className={activePage === 'Reviews' ? 'selected-sidebar-item' : ''} onClick={() => setActivePage('Reviews')}><FaStar /> Reviews</li>
          <li className={activePage === 'Contact' ? 'selected-sidebar-item' : ''} onClick={() => setActivePage('Contact')}><FaPhone /> Contact</li>
        </ul>
      </div>
      <div className="main-content">
        {activePage === 'Services' && (
          <>
            <h1>Book an Appointment</h1>
            <div className="selection-boxes">
              <div className="selection-box">
                <div className="box-label">Service</div>
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
                <div className="box-label">Doctor</div>
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
            <div className="time-grid-container">
              <p>Available Time on {date.toDateString()}</p>
              <div className="time-grid">
                {times.map(time => (
                  <div 
                    key={time} 
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`} 
                    onClick={() => setSelectedTime(selectedTime === time ? null : time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
            <div className="confirm-booking-wrapper">
              <div className={`confirm-booking-box ${selectedService && selectedDoctor && selectedTime ? 'active' : ''}`}>
                Confirm Booking
              </div>
            </div>
          </>
        )}

        {activePage === 'Doctors' && (
          <div className="doctors-page">
            <h1>Our Doctors</h1>
            <div className="doctor-list">
              {currentDoctors.map(doctor => (
                <div key={doctor.id} className="doctor-card">
                  <img src={doctor.pic} alt={doctor.name} className="doctor-pic" />
                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p>{doctor.email}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

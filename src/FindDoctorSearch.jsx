import React, { useState } from 'react';
import './FindDoctorSearch.css';
import Notification from './Notification';

const FindDoctorSearch = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [doctorName, setDoctorName] = useState("");
    const specialties = ['Dentist', 'Gynecologist', 'General Physician', 'Dermatologist', 'Pediatrician'];
    const handleBooking = () => {
        // Déclenche l'affichage de la notification
        setShowNotification(true);

        // Optionnel : Cache la notification automatiquement après 3 secondes
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };
    return (
        <div className="search-container">
            {/* Affichage conditionnel de la notification */}
            {showNotification && (
                <Notification
                    message="Appointment Booked Successfully!"
                    onClose={() => setShowNotification(false)}
                />
            )}
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div className="search-box">
                    <i className="fa fa-search"></i>
                    <input
                        type="text"
                        placeholder="Search doctors, clinics, hospitals, etc."
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                    />
                    <div className="specialty-list">
                        {specialties.map(spec => (
                            <div key={spec} className="specialty-item">
                                <i className="fa fa-search"></i>
                                <span>{spec}</span>
                            </div>
                        ))}
                    </div>
                    {/* Simulation d'une carte de docteur pour la capture d'écran */}
                    <div className="doctor-card-simulation" style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '10px', maxWidth: '300px' }}>
                        <h3>Dr. Samy</h3>
                        <p>Dentist - 10 years experience</p>
                        <button
                            onClick={handleBooking}
                            style={{ backgroundColor: '#2196f3', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px' }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;
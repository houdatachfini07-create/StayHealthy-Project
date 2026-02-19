import React from 'react';
import './InstantConsultation.css';

const InstantConsultation = () => {
    return (
        <div className="consultation-container">
            <h1>Instant Consultation</h1>
            <p>Select a specialty to start an immediate consultation with a verified doctor.</p>
            <div className="specialty-grid">
                {['Cardiology', 'Neurology', 'Orthopedics', 'General Medicine'].map(item => (
                    <div key={item} className="consult-card">
                        <h3>{item}</h3>
                        <button className="btn-consult">Start Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstantConsultation;
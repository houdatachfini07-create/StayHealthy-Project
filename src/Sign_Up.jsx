import React from 'react';
import './Sign_Up.css';

const SignUp = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation
    alert("Compte créé avec succès ! Bienvenue sur StayHealthy."); 
    // PRENDS LA CAPTURE QUAND CETTE ALERTE EST À L'ÉCRAN
};
    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label>Role</label>
                    <select><option>Patient</option></select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="btn-primary">Submit</button>
                    <button type="reset" className="btn-secondary">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
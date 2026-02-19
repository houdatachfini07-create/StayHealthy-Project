import React from 'react';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation
    alert("Connexion réussie ! Bienvenue sur StayHealthy."); 
    // PRENDS LA CAPTURE QUAND CETTE ALERTE EST À L'ÉCRAN
};
  return (
    <div className="login-container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
          <p>Are you a new member? <a href="/signup" style={{color: '#2196f3'}}>Sign Up Here</a></p>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn-login">Login</button>
              <button type="reset" className="btn-reset">Reset</button>
            </div>
          </form>
          <p className="forgot-password">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
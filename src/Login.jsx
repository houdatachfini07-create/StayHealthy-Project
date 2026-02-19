import React from 'react';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Récupérer la valeur de l'email depuis le formulaire
        const emailValue = e.target.email.value;

        if (emailValue) {
            // 1. Stocker l'email pour que la Navbar sache qu'on est connecté
            sessionStorage.setItem("email", emailValue);
            
            // 2. Afficher l'alerte pour ta capture d'écran (Task 6)
            alert("Connexion réussie ! Bienvenue sur StayHealthy."); 
            
            // 3. Rediriger vers l'accueil
            window.location.href = "/"; 
        } else {
            alert("Please enter a valid email");
        }
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
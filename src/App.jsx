import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignUp from './Sign_Up';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* BrowserRouter permet de gérer l'historique de navigation */}
        <BrowserRouter>
          {/* La Navbar s'affichera sur toutes les pages */}
          <Navbar />
          
          <Routes>
            {/* Route pour la page d'accueil (tu peux créer un composant Landing plus tard) */}
            <Route path="/" element={<h1>Welcome to StayHealthy</h1>} />
            
            {/* Route pour l'inscription */}
            <Route path="/signup" element={<SignUp />} />
            
            {/* Route pour la connexion */}
            <Route path="/login" element={<Login />} />
            
            {/* Ajoute les futures routes ici (ex: /appointments) */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
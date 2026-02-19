import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Vérification de la connexion au chargement
    useEffect(() => {
        const email = sessionStorage.getItem("email");
        if (email) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // ON NETTOIE LE STORAGE ICI
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("auth-token");
        setIsLoggedIn(false);
        window.location.href = "/login";
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">StayHealthy <i className="fa fa-user-md"></i></a>
            </div>
            <ul className="navbar-links">
                <li className="link"><a href="/">Home</a></li>
                <li className="link"><a href="/appointments">Appointments</a></li>
                <li className="link"><a href="/blog">Health Blog</a></li>
                <li className="link"><a href="/reviews">Reviews</a></li>
            </ul>
            <div className="navbar-auth">
                {isLoggedIn ? (
                    <>
                        <span className="welcome-text">Welcome, User!</span>
                        <button className="btn-logout" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <div className="navbar-buttons">
                        <Link to="/signup">
                            <button className="btn-signup">Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn-login">Login</button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
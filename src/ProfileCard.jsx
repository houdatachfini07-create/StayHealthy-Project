import React, { useEffect, useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Récupération des infos stockées lors du login
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setUserDetails({
        name: storedEmail.split('@')[0], // Nom par défaut basé sur l'email
        email: storedEmail,
        phone: "123-456-7890",
      });
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
        </div>
        <button className="btn-edit">Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
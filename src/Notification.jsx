import React from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification-container">
      <div className="notification-content">
        <p>{message}</p>
        <button onClick={onClose} className="btn-close-notification">×</button>
      </div>
    </div>
  );
};

export default Notification;
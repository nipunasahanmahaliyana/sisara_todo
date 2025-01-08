import React from 'react';
import './Alert.css';

const Modal = ({ message, type, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className={`modal ${type}`}>
        <p>{message}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

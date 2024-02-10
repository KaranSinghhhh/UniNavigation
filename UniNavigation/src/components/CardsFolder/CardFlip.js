// CardFlip.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import "./CardFlip.css"; // Make sure the CSS path is correct

export default function CardFlip({ isFlipped, onClick }) {
  return (
    <button className={`card-flip-button ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={faRotate} />
    </button>
  );
}
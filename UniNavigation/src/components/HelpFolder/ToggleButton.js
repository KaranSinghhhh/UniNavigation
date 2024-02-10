import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./ToggleButton.css"

const ToggleButton = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='toggle-container'>


            <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </button>
            {isOpen && <div className="toggle-content">{children}</div>}
        </div>
    );
};

export default ToggleButton;
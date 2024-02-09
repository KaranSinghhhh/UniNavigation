import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faElevator} from '@fortawesome/free-solid-svg-icons';
import "./Accessibility.css"

export default function AccessibilityItems(props) {
  return (
    <>
      <h3 className='accessibility__sub__heading'>Contact and Accessibility</h3>
      
      <div className='accessibility__items'>
        
        {props.phone && (
          <div className='accessibility__item'>
            <FontAwesomeIcon icon={faPhone} className="icon-black"/>
            <span className='accessibility__text'>{props.phone}</span>
          </div>
        
        )}
        
        
        {props.email && (
          <div className='accessibility__item'>
            <FontAwesomeIcon icon={faEnvelope} className="icon-black"/>
            <span className='accessibility__text'>{props.email}</span>
          </div>
          
        )}
        
        
        {props.address && (
          <div className='accessibility__item'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-black"/>
            <span className='accessibility__text'>{props.address}</span>
          </div>
        )}
        
        {props.elevator && (
          <div className='accessibility__item'>
            <FontAwesomeIcon icon={faElevator} className="icon-black"/>
            <span className='accessibility__text'>{props.elevator}</span>
          </div>
        )}
        
      </div>
        
    </>
  )
}



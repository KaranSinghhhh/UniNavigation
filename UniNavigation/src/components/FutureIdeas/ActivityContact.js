import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock, faGlobe} from '@fortawesome/free-solid-svg-icons';
import "./ActivityContact.css"


export default function ActivityContact(props) {
   const handleLinkClick = (e) => {
       // Stop the event from bubbling up to any parent elements
       e.stopPropagation();
   };


 


   return (
       <>
           <h3 className='activity__accessibility__sub__heading' >Contact</h3>
           <div className='activity__accessibility__items'>
               {props.phone && (
                   <div className='activity__accessibility__item'>
                       <FontAwesomeIcon icon={faPhone} className="icon-black"/>
                       <span className='activity__accessibility__text'>{props.phone}</span>
                   </div>
               )}
               {props.address && (
                   <div className='activity__accessibility__item'>
                       <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-black"/>
                       <span className='activity__accessibility__text'>{props.address}</span>
                   </div>
               )}
               {props.clock && (
                   <div className='activity__accessibility__item'>
                       <FontAwesomeIcon icon={faClock} className="icon-black"/>
                       <span className='food__accessibility__text'>{props.clock}</span>
                   </div>
               )}
               {props.globe && (
                   <div className='activity__accessibility__item'>
                       <FontAwesomeIcon icon={faGlobe} className="icon-black"/>
                       <a href={`https://${props.globe}`} target="_blank" rel="noopener noreferrer" className='food__accessibility__text' onClick={handleLinkClick}>
                           {props.globe}
                       </a>
                   </div>
               )}
           </div>
       </>
   );
}




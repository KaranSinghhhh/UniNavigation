
import React from 'react';
import { Link } from 'react-router-dom';
import AccessibilityItems from './AccessibilityItems';
import MapItem from '../Mapitems';
import CardFlip from './CardFlip';

export default function CardItem(props) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <li className={`cards_item ${isFlipped ? 'flipped' : ''}`}>
        <CardFlip onClick={handleFlip}/>
        
        <div className="card-content">
          <div className={`card-front ${isFlipped ? 'hidden' : ''}`}>
            <Link className="cards__item__link" to="#">
              <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt="Another IMG" className="cards__item__img"/>
              </figure>

              <div className="cards__item__info">
                <h5 className="cards__item__text">{props.text}</h5>
                <AccessibilityItems
                  phone={props.phone}  
                  email={props.email}
                  address={props.address}
                  elevator={props.elevator}
                />
                <MapItem
                  latitude={props.latitude}
                  longitude={props.longitude}
                  zoom={props.zoom}
                />
              </div>
            </Link>
          </div>

          <div className={`card-back ${isFlipped ? '' : 'hidden'}`}>
            {props.backContent} 
            
          </div>
        </div>
      </li>
    </>
  );
}






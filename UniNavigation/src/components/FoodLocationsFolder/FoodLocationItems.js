import React from "react";
import { Link } from 'react-router-dom';
import FoodLocationContact from "./FoodLocationContact";
import MapItem from "../Mapitems";

export default function FoodLocationItems(props) {
    return (
        <>
            
       
            <div className="food-card-content">
                
                <Link className="food__cards__item__link" to="#">
                    <figure className='food__cards__item__pic-wrap'>
                        <img src={props.src} alt={props.text + " image"} className="food__cards__item__img"/>
                    </figure>
                    <div className="food__cards__item__info">
                        <h5 className="food__cards__item__text">{props.text}</h5>
                        <h6 className="food__cards__item__subtext">{props.summary}</h6>
                        <FoodLocationContact
                            name={props.name}
                            summary={props.summary}
                            phone={props.phone}
                            address={props.address}
                            clock={props.clock} // Make sure this matches the prop you are passing.
                            globe={props.globe}
                        />
                        <MapItem
                            latitude={props.latitude}
                            longitude={props.longitude}
                            zoom={props.zoom}
                        />
                    </div>
                </Link>
            </div>
        </>
    );
}

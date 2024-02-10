import React from "react";
import { Link } from 'react-router-dom';
import ActivityContact from "./ActivityContact";
import MapItem from "./Mapitems";

export default function AcitvityItems(props) {
    return (
        <div className="activity-card-content">
            <Link className="activity__cards__item__link" to="#">
                <figure className='activity__cards__item__pic-wrap'>
                    <img src={props.src} alt={props.text + " image"} className="activity__cards__item__img"/>
                </figure>
                <div className="activity__cards__item__info">
                    <h5 className="activity__cards__item__text">{props.text}</h5>
                    <h6 className="activity__cards__item__subtext">{props.summary}</h6>
                    <ActivityContact
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
    );
}

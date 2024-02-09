import React from "react";
import ActivityItems from "./ActivityItems";
import "./Activity.css"

import FriendsExperience from "./images/FriendsExperience.jpeg"
import LegoStore from "./images/LegoStore.jpeg"
import GramercyTheatre from "./images/GramercyTheatre.png"
import MishkinGallery from "./images/MishkinGallery.webp"
import IrvingPlaza from "./images/IrvingPlaza.webp"

import DiDiDumpling from "./images/DidiDumpling.png"
import TacosTimeSquare from "./images/TacosTimeSquare.jpeg"
import BurpBowlCafe from "./images/BurpBowlCafe.jpeg"
import SunFlowerGramercy from "./images/SunFlowerGramercy.jpeg"
import SarabethsRestaurants from "./images/SarabethsRestaurants.jpeg"
import BagelsAndSchmear from "./images/BagelsAndSchmear.jpeg"


function Activity() {
    return (
        <div classname='activity_cards'>
            <h1>Activities</h1>
            <div className="activity__cards__container">
                <div className="activity__cards__wrapper">
                    <ul className="activity__cards__items">
                        <ActivityItems
                        src={FriendsExperience}
                        text = "Friends Experience"
                        summary = "Trendy coffee hours designed to resembre Central Perk from the set of the TV show Friends."
                        phone = ""
                        address = "34 Lexington Ave, New York, NY 10010"
                        globe = "dididumplingny.com"
                        latitude = {40.7402676397689}
                        longitude = {-73.983967890}
                        zoom = {18}
                        />

                        <ActivityItems
                        src={LegoStore}
                        text = "Lego Store"
                        summary = "Retailer showcasing the brand's colorful building set & bricks, plus figurines & toys."
                        phone = "212-245-3248"
                        address = "636 5th Ave, New York, NY 10020"
                        globe = "lego.com"
                        latitude = {40.7402676397689}
                        longitude = {-73.983967890}  
                        zoom = {18}
                        />

                        <ActivityItems
                        src={GramercyTheatre}
                        text = "Gramercy Theatre"
                        summary = "Former Cinema turned concert space with seating in the rear, plus room to rock out in front."
                        phone = "212-614-6932"
                        address = "127 E 23rd St, New York, NY 10010"
                        globe = "livemu.sc"
                        latitude = {40.7402676397689}
                        longitude = {-73.983967890}
                        zoom = {18}
                        />

                        <ActivityItems
                        src={MishkinGallery}
                        text = "Burp Bowl Cafe"
                        summary = "Chinese take-out joint making a variety of traditional noddle soups & dumplings."
                        phone = "929-261-6643"
                        address = "134 E 27th St, New York, NY 10016"
                        globe = "burpbowlcafe-ny.com"
                        latitude = {40.7402676397689}
                        longitude = {-73.983967890}
                        zoom = {18}
                        />

                        <ActivityItems
                        src={IrvingPlaza}
                        text = "Irving Plaza"
                        summary = "Prime NYC theater for established & up-and-coming bands, packing in fans since 1978."
                        phone = "212-777-6817"
                        address = "17 Irving Pl, New York, NY 10013"
                        globe = "livenation.com"
                        latitude = {40.73508}
                        longitude = {-73.98838}
                        zoom = {18}
                        />    

                        <ActivityItems
                        src={BagelsAndSchmear}
                        text = "Bagels & Schmear"
                        summary = "Sandwiches, salads, breakfasts, & baked goods round out the menu at this standard NYC bagelry"
                        phone = "212-725-7873"
                        address = "116 E 28th St, New York, NY 10016"
                        globe = "bagelsandschmear.com"
                        latitude = {40.7402676397689}
                        longitude = {-73.983967890}
                        zoom = {18}
                        />        

                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Activity;

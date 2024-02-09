import React, { useState } from "react";
import FoodLocationItems from "./FoodLocationItems";
import "./FoodLocations.css";

import TacosTimeSquare from "../images/TacosTimeSquare.jpeg";
import BurpBowlCafe from "../images/BurpBowlCafe.jpeg";
import SunFlowerGramercy from "../images/SunFlowerGramercy.jpeg";
import BagelsAndSchmear from "../images/BagelsAndSchmear.jpeg";
import LittleBasil from "../images/LittleBasil.jpeg";
import SurrealCremeary from "../images/SurrealCreamery.jpeg";
import BlackStar from "../images/BlackStar.jpeg";
import BlankStreet from "../images/BlankStreet.jpeg";
import MattoEspresso from "../images/MattoEspresso.jpeg";
import DesiGalli from "../images/DesiGalli.webp";
import MaguoroSushi from "../images/maguorosushi.webp";
import SummerSalt from "../images/SummerSalt.jpeg";
import Tacombi from "../images/Tacombi.jpeg";
import MoMoSushi from "../images/MoMoSushi.jpeg";
import BhattiIndianGrill from "../images/BhattiIndianGrill.jpeg";
import Sathi from "../images/Sathi.jpeg";
import NaNaThai from "../images/NaNaThaiStreet.jpeg";
import MaliiGramercy from "../images/MaliiGramercy.jpeg";
import AweSumDimSum from "../images/AweSumDimSum.jpeg";
import nonono from "../images/NONONO.jpeg"
import EAdumpling from "../images/EAdumpling.png"

function FoodLocations() {
    const [activeFilter, setActiveFilter] = useState('all');

    const foodItems = [
        {
            src: EAdumpling,
            text: "EA Dumpling",
            summary: "Soup Dumplings & Chinese pot stickers are the specialty at this compact counter-service eatery.",
            cuisine: "Chinese",
            phone: "646-858-0338",
            address: "34 Lexington Ave, New York, NY 10010",
            globe: "eadumpling.com",
            latitude: 40.74004,
            longitude: -73.98453,
            zoom: 18
        },

        {
            src: TacosTimeSquare,
            text: "Tacos Time Square",
            summary: "Delicious Mexican Cuisine with specialty dished inclusing tacos, burritos, burrito bowls, and more!",
            phone: "212-889-9090",
            address: "134 E 27th St, New York, NY 10016",
            globe: "tacostimessquareny.com",
            latitude : 40.74180,
            longitude : -73.98266,
            zoom : 18,
            cuisine: "Mexican",
        },
        {
            src: BurpBowlCafe,
            text: "Burp Bowl Cafe",
            summary: "Chinese take-out joint making a variety of traditional noddle soups & dumplings.",
            phone: "929-261-6643",
            address: "134 E 27th St, New York, NY 10016",
            globe: "burpbowlcafe-ny.com",
            latitude:40.74180,
            longitude:-73.98262,
            zoom:18,
            cuisine: "Chinese",
            

        },
        {
            src: Sathi,
            text: "Sathi",
            summary: "Traditional Indian spot offering a veriety of meat, seafood, & veggie curries with rice or naan",
            phone: "212-260-3700",
            address: "216 3rd Ave, New York, NY, 10003",
            globe: "sathinewyork.com",
            latitude: 40.73629,
            longitude: -73.98541,
            zoom: 18,
            cuisine: "Indian"

        },
        {
            src:SunFlowerGramercy,
            text:"Sun Flower Gramercy",
            summary: "Bright, roomy cafe with terrace seating, doling out breakfast classics, burgers, & coffee",
            phone: "917-262-0804",
            address: "335 3rd Ave, New York, NY 10010",
            globe: "sunflowergramercy.com",
            latitude: 40.73991,
            longitude: -73.98213,
            zoom: 18,
            cuisine: "Breakfast",
                       

        },
     
        {
            src:BagelsAndSchmear,
            text: "Bagels & Schmear",
            summary : "Sandwiches, salads, breakfasts, & baked goods round out the menu at this standard NYC bagelry",
            phone : "212-725-7873",
            address : "116 E 28th St, New York, NY 10016",
            globe : "bagelsandschmear.com",
            latitude : 40.74293,
            longitude : -73.98336,
            zoom : 18,
            cuisine: "Breakfast"



        },
        {
            src: LittleBasil,
            text : "Little Basil",
            summary : "A standard menu of Thai classics drawslocals to this casual little restaurant",
            cuisine: "Thai",
            phone: "212-689-1444",
            address : "153 E 26th St, New York, NY 10010",
            globe : "littlebasil.com",
            latitude : 40.74120,
            longitude : -73.98230,
            zoom : 18

        },
        {
            src: SurrealCremeary,
            text : "Surreal Creamery",
            summary : "Compact spot for imaginative ice cream creations in masjon jars, plus bubble tea floats & milkshakes.",
            cuisine: "Desserts",
            phone:"646-590-3575",
            address : "528 2nd Ave, New York, NY 10016",
            globe : "surrealcreamery.com",
            latitude : 40.74213,
            longitude : -73.97749,
            zoom : 18

        },
        {
            src: BlackStar,
            text: "Black Star Bakery & Cafe",
            summary: "Cozy NYC bakery and cafe offering artisanal pastries, fresh coffee, and a relaxed ambiance.",
            phone: "646-476-9933",
            address: "241 E 24th St, New York, NY 10010",
            globe: "blackstarbakery.com",
            latitude: 40.73849,
            longitude: -73.98070,
            zoom: 18,
            cuisine: "Breakfast"
        },
        {
            src: BlankStreet,
            text: "Blank Street Coffee",
            summary: "Contemporary coffee shop offering a variety of coffee and snacks in a minimalist setting.",
            phone: "N/A",
            address: "127 E 23rd St, New York, NY 10010",
            globe: "blankstreet.com",
            latitude: 40.73979,
            longitude: -73.98504,
            zoom: 18,
            cuisine: "Breakfast"
        },
        {
            src: NaNaThai,
            text: "NaNa Thai Street",
            summary: "Traditional Thai plates (with orgian & vegan options) served in a casual space with some seating",
            phone: "212-420,7500",
            address: "31 E 21st St, New York, NY 10010",
            globe: "nanathaistreetnyc.com",
            latitude: 40.73963,
            longitude: -73.98850,
            zoom: 18,
            cuisine: "Thai"
        },        
        {
            src: MoMoSushi,
            text: "MoMo Sushi",
            summary: "A Large sushi menu, including sashimi & signarture rolls, offered in a vibrant, contemporary space.",
            phone: "212-677-7001",
            address: "239 Park Ave S, New York, NY 10003",
            globe: "momonyc.com",
            latitude: 40.73796,
            longitude: -73.98787,
            zoom: 18,
            cuisine: "Japanese"
        },
        {
            src: MaliiGramercy,
            text: "Malii Gramercy",
            summary: "A premier and creative Thai Restaurant that has been proudly serving the Gramercy Park area in Manhattan.",
            phone: "646-952-0078",
            address: "391 2nd Ave, New York, NY 10010",
            globe: "maliigramercy.com",
            latitude: 40.73772,
            longitude: -73.98134,
            zoom: 18,
            cuisine: "Thai"

        },
        {
            src: BhattiIndianGrill,
            text: "Bhatti Indian Grill",
            summary: "Authentic North Indian cuisine including kebabs & regional specialties in a modern small space.",
            phone: "212-683-4228",
            address: "100 Lexington Ave, New York, NY, 10016",
            globe: "bhattinyc.com",
            latitude: 40.74221,
            longitude: -73.98300,
            zoom: 18,
            cuisine: "Indian"
        },
        {   
            src: nonono,
            text: "NONONO",
            summary: "Bi-level, modern restaurant serving yakitori and ramen dished, plus Japanese comfort food in a casual setting.",
            phone: "646-707-3227",
            address: "118 Madison Ave, New York, NY 10016",
            globe: "nonononyc.com",
            latitude: 40.74544,
            longitude: -73.98491,
            zoom: 18,
            cuisine: "Japanese"

        },
        {
            src: MattoEspresso,
            text: "Matto Espresso",
            summary: "Coffee Shop offering a variety of coffee blends and light snacks in a casual ambiance.",
            phone: "347-883-8000",
            address: "351 3rd Ave, New York, NY 10010",
            globe: "matto.com",
            latitude: 40.74052,
            longitude: -73.98170,
            zoom: 18,
            cuisine: "Breakfast"
        },
        {
            src: DesiGalli,
            text: "Desi Galli",
            summary: "Counter-serve eatery offering Indian wraps in a tight space with a downstairs seating area.",
            phone: "212-683-2292",
            address: "101 Lexington Ave, New York, NY 10016",
            globe: "desigalli.com",
            latitude: 40.74212,
            longitude: -73.98260,
            zoom: 18,
            cuisine: "Indian"
        },
        {
            src: Tacombi,
            text: "Tacombi",
            summary: "Hopping market-deeling eatery comprmising a taqueria, juice stand & Veracruz-style coffee bar.",
            phone: "212-242-3491",
            address: "20 W 24th St, New York, NY 10010",
            globe: "tacombi.com",
            latitude: 40.74295, 
            longitude: -73.99113,
            zoom: 18,
            cuisine: "Mexican"
        },
        {
            src: AweSumDimSum,
            text: "AweSum DimSum",
            summary: "Casual industrial-style Cantonese eatery whipping up baked, friend, and steamed buns.",
            phone: "646-998-3312",
            address: "160 E 23rd St, New York, NY 10010",
            globe: "toasttab.com",
            latitude: 40.73886,
            longitude: -73.98367,
            zoom: 18,
            cuisine: "Chinese"

        },
        {
            src: MaguoroSushi,
            text: "Maguro Sushi",
            summary: "Quaint spot for traditional Japanese teriyaki & noodle dishes plus sushi rolls & sashimi.",
            phone: "212-510-8883",
            address: "160 E28th St, New York, NY 10016",
            globe: "magurosushi.dine.online",
            latitude: 40.74208,
            longitude: -73.98135,
            zoom: 18,
            cuisine: "Japanese"
        },
        {
            src: SummerSalt,
            text: "Summer Salt",
            summary: "Down-to-earth restaurant offering California-style Mexican cuisine in a casual atmosphere.",
            phone: "212-209-0648",
            address: "30 E23rd St, Storefront, NY 10010",
            globe: "summersalt.nyc",
            latitude: 40.742058,
            longitude: -73.98772,
            zoom: 18,
            cuisine: "Mexican"
        }
      
    ];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredFoodItems = activeFilter === 'all' 
        ? foodItems 
        : foodItems.filter(item => item.cuisine === activeFilter);  

    return (
        <>
            <h1>Food Locations</h1>
            <div className="food_cards">
                <div className="Food__Locations__Filter__container">
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('all') }>All</button>
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('Chinese')}>Chinese</button>
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('Mexican')}>Mexican</button>
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('Indian')}>Indian</button>
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('Japanese')}>Japanese</button>
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('Thai')}>Thai</button>
                    <button className='Food_Locations_Filter_Row' onClick={() => handleFilterChange('Breakfast')}>Breakfast</button>
                    {/* Add more buttons if needed */}
                </div>
                
                <div className="food__cards__container">
                    <div className="food__cards__wrapper">
                        <ul className="food__cards__items">
                            {filteredFoodItems.map((item, index) => (
                                <FoodLocationItems
                                    key={index}
                                    src={item.src}
                                    text={item.text}
                                    summary={item.summary}
                                    cuisine={item.cuisine}
                                    phone={item.phone}
                                    address={item.address}
                                    globe={item.globe}
                                    latitude={item.latitude}
                                    longitude={item.longitude}
                                    zoom={item.zoom}
                                    // ... include other props as needed ...
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodLocations;

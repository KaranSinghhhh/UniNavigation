import React from 'react'
import "./Hero.css"
import "../App.css"
import { Button } from "./Button"
import { Link } from 'react-router-dom'; // Import Link

function Hero() {
  return (
    <div className='hero-container'>
        <h2>Explore Baruch College</h2>
          <div className='line'></div>
          <h1>A complete Visual Guide</h1>
        <div className="hero-btns">
            <Link to='/learn-more'> 
              <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large" linkTo="/learn-more">
                  Learn More
              </Button>
            </Link>
        </div>

      
    </div>
  )
}

export default Hero

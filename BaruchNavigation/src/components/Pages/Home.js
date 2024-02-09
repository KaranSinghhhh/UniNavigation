import React from 'react'

import '../../App.css';

import Hero from "../Hero"
import Cards from '../CardsFolder/Cards';
import Footer from "../Footer"

function Home () {
    return (
        <>
            <Hero/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;
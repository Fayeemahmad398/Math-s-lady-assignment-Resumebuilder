import React from 'react'
import Header from '../Components/Header'
import Details from '../Components/Details'
import "../styles/home.css"

function Home() {
    return (
        <div className='home'>
            <Header />
            <Details />
        </div>
    )
}

export default Home
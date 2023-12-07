import React from 'react'
import LeftPortion from './LeftPortion'
import RightPortion from './RightPortion'
import "../styles/Details.css"

function Details() {
    return (
        <div className='details'>
            <LeftPortion />
            <RightPortion />
        </div>
    )
}

export default Details
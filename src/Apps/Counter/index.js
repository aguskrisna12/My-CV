import React from 'react'
import { useState } from 'react';

function Main () {
    const [click,setClick] = useState('')

    function handleClick () {
        setClick("Thank You For Subcribing")
    }    
    return (
        <div>
            <h2>{click}</h2>
            <button onClick={handleClick}>Subcribe</button>
        </div>
        
    )
}

export default Main;
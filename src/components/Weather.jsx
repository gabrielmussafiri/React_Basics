import React from 'react'

const Weather = () => {
    const Temperature = 26
    
    if(Temperature <15){
        return <h1> Its Cold Outside</h1>
    }
    else if(Temperature >= 15 && Temperature <25){
        return <h1> its nice outside</h1>
    }
    else if(Temperature>25) {
        return <h1>Its Very Hot</h1>
    }
    else{
        return <h1>Hey Bro go sleep no waether</h1>
    }
  
}

export default Weather

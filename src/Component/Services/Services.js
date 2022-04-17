import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    
    const [placaes,setPlaces] = useState([])
    useEffect( ()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setPlaces(data))
    },[])

    return (
        <div>
            <h1>Services</h1>
            <div className='services container me-5 '>
            {
                placaes.map(place => <Service place={place} key={place.id}></Service>)
            }

            </div>
        </div>
    );
};

export default Services;
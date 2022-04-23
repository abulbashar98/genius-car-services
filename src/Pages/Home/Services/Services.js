import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    // const services = [
    //     { name: 'oil change', id: 1, price: 200, description: '', image: 'https://i.ibb.co/WWcJX2P/mechanic-holding-digital-tablet-1.png' }
    // ]

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1>This is services: {services.length}</h1>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;
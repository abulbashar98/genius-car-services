import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

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
        <div className='container my-5'>
            <h1 className='text-primary text-center my-5'>Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
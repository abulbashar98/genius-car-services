import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, img, description, price } = service;
    const navigate = useNavigate();


    const navigateToServiceDetals = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service p-3'>
            <img className='w-100' src={img} alt="" />
            <h2>This is Service: {name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetals(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const navigate = useNavigate();

    const { serviceId } = useParams();
    const handleCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <div>
            <h1>Welcome to The Details for Service: {serviceId}</h1>
            <div className='text-center'>
                <button onClick={handleCheckOut} className='btn btn-success my-4'>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;
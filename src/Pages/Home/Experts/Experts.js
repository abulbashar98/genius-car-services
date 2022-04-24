import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Joaquin Phonex', img: expert1 },
    { id: 2, name: 'Dwyane Johnson', img: expert2 },
    { id: 3, name: 'Robert de Niro', img: expert3 },
    { id: 4, name: 'Jason Mamoah', img: expert4 },
    { id: 5, name: 'Robert downey Jr', img: expert5 },
    { id: 6, name: 'Chris Hemsworth', img: expert6 },
]


const Experts = () => {
    return (
        <div className='container my-5'>
            <h1 id='experts' className='text-primary my-5 text-center'>Our Experts</h1>
            <div className="row g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div >
    );
};

export default Experts;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>The majority have suffered alteration <br /> in some form, by injected humour, or randomised words which <br /> don't look even slightly believable. </p>
            </div>

            <div className='grid gap-6 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
                
                <Link to="/serviceAll">
                <button className="btn btn-info mb-4">See All</button>
                </Link>
                
        </div>
    );
};

export default Services;
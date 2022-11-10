import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://independence-service-review-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-5 border rounded-lg w-full h-48'>
                <p className='text-4xl font-bold text-orange-600 mb-3'>Services</p>
                {/* <h2 className='text-5xl font-semibold'>Our Service Area</h2> */}
                <p className='mb-5'>We are quite easy to find and have different locations around the globe. <br /> Just click above to find the location closest to you and pop into our office. <br /> We are open on weekdays and Saturdays to make it easier for  clients who are working <br /> to speak to us. We are social on facebook, so do send us a message if you would like  </p>
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
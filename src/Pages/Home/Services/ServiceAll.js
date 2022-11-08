import React, { useEffect, useState } from 'react';
import ServiceCardAll from './ServiceCardAll';

const ServiceAll = () => {
    const [serviceAll, setServiceAll] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/serviceAll')
        .then(res => res.json())
        .then(data => setServiceAll(data))
    }, [])


    return (
        <div>
            <h3 className='text-4xl mb-3'>All Service Here</h3>

            <div className='grid gap-6 mt-3 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
                {
                    serviceAll.map(service => <ServiceCardAll
                    key={service._id}
                    service={service}
                    >

                    </ServiceCardAll> )
                }
            </div>
        </div>
    );
};

export default ServiceAll;
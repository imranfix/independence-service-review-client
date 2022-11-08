import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, image, fees, title, details} = service;

    return (
        <div className="card card-compact w-62 bg-base-100 shadow-xl">
    <figure><img className='p-3' src={image} alt="Shoes" /></figure>
         <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Fees: {fees}</p>
    <p> {details.slice(0, 50) + '...'}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}>
      <button className="btn btn-primary">Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
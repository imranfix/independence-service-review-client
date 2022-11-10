import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const OrderRow = ({order, handleDeleteButton,  handleStatusUpdate}) => {
    const {client, _id, fees, review, serviceName, email, service, status} = order;
    const [orderService, setOrderService] = useState({});

    useEffect( () =>{
        fetch(`https://independence-service-review-server.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    }, [service])


  

    return (
        <tr>
        <th>
            <label>
            <button onClick={()=> handleDeleteButton(_id)} className='btn btn-warning'>Delete</button>
          <Link to={`/review/${order._id}`}>
          <button className='btn btn-gray ml-2'>edit</button>
          </Link>
          </label>
        </th> 
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
               {
                orderService?.image &&
                 <img src={orderService.image} alt="Avatar Tailwind CSS Component" />
               }
              </div>
            </div>
            <div>
              <div className="font-bold">{client}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${fees}</span>
        </td>
        <th>
            <button className='btn btn-ghost'>{review}</button>
        </th>
        {/* <td>Purple</td> */}
        <th>
          <button onClick={()=> handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
        </th>
      </tr>
    );
};

export default OrderRow;


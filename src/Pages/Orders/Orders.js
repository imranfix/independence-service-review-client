import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';



const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
    fetch(`https://independence-service-review-server.vercel.app/orders?email=${user?.email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('immigration-token')}`
        }
    })
    .then(res => {
        if(res.status === 401 || res.status === 403){
          return logOut()
        }
        return res.json()
    })
    .then(data => {
        setOrders(data)
    })
    }, [user?.email, logOut])

      // delete function:
      const handleDeleteButton = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this order')

        if(proceed){
            fetch(`https://independence-service-review-server.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('immigration-token')}`
                }

            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount >  0){
                   alert("Deleted Successfully")
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    // Updated status function:
    const handleStatusUpdate = id =>{
        fetch(`https://independence-service-review-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('immigration-token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
        })
    }


    return (
        <div>
            <h2 className='text-3xl'>You have confirm {orders.length} service</h2>

          
            <div className="overflow-x-auto w-full mb-4 mt-4">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Client Details</th>
        <th>Catagory</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
        
        {
            orders.map(order => <OrderRow
            key={order._id}
            order={order}
            handleDeleteButton={handleDeleteButton}
            handleStatusUpdate={ handleStatusUpdate}
            ></OrderRow>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;
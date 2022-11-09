import React, { useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';



const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
    }, [user?.email])

      // delete function:
      const handleDeleteButton = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this order')

        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
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
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
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
            <h2 className='text-3xl'>You have confirm {orders.length} orders</h2>

          
            <div className="overflow-x-auto w-full mb-4 mt-4">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>  */}
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
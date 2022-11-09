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
                   <Toaster
                     position="top-center"
                    reverseOrder={false}
                    />
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
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
        <th>Review</th>
      </tr>
    </thead>

    <tbody>
        
        {
            orders.map(order => <OrderRow
            key={order._id}
            order={order}
            handleDeleteButton={handleDeleteButton}
            ></OrderRow>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;
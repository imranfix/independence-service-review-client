import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceInfo = () => {
    const {title, _id, fees, image, details} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const photo = form.photo.value; 
        const email = user?.email || 'unregistered';
        const review = form.review.value;

        const order = {
            service: _id,
            serviceName: title,
            fees: fees,
            client: name,
            email,
            photo,
            review,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order confirm successfully')
                form.reset();
            }
        })
        .catch(err => console.error(err));

    }


    return (
        <div className='grid grid-cols-1'>

         <div className='mb-5'><h3 className='text-2xl mb-3'>You selected: {title}</h3>
         <div className="card card-compact w-22 bg-base-100 shadow-xl">
        <figure><img className='p-3' src={image} alt="Shoes" /></figure>
         <div className="card-body">
                <h2 className="card-title">{title}</h2>
            <p className='text-2xl text-orange-600 font-semibold'>Fees: {fees}</p>
            <p> {details}</p>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
 </div>

   <form onSubmit={handlePlaceReview} className='mb-5 form-bordered'>
    <div className='mb-2'><h3>section-2</h3>
    <input name="name" type="text" placeholder="Your name" className="input input-bordered w-full mb-3" />
    <input name="photo" type="text" placeholder="Photo url" className="input input-bordered w-full mb-3" />
    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full mb-3" />

</div>
        <textarea name="review" className="textarea textarea-bordered w-full h-24 mb-2" placeholder="Review"></textarea>
        <input className='btn' type='submit' value='Confirm'/>
   </form>
        
        </div>
    );
};

export default ServiceInfo;
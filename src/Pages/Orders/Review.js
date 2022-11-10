import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const reviewAll = useLoaderData()
    const {review, title} = reviewAll;


    return (
        <div className='mb-5'>
            <h3>Review: {title}</h3>
        <textarea name="review" className="textarea textarea-bordered w-full h-24 mb-2" placeholder="Review" ></textarea>
        <input className='btn' type='submit' value='Edit Review'/>
        </div>
    );
};

export default Review;
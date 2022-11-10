import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const review = useLoaderData()


    return (
        <div>
            <h3>Review Edit: {review.name}</h3>
        </div>
    );
};

export default Review;
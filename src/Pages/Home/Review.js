import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://floating-atoll-49766.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        <div>
            <h2 className='text-center text-3xl text-bold text-primary mb-5'>Our Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
            {
                reviews.map(r=><div className=' border-2 mb-2 p-3 '>
                    <h2 className='text-left text-primary text-bold text-2xl'>{r?.name}</h2>
                    <p className='text-left'>{r?.customerReview}</p>
                </div>)
            }
            </div>
            
        </div>
    );
};

export default Review;
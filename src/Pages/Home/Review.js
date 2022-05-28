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
            <h2>Our Customer Reviews</h2>
            {
                reviews.map(r=><></>)
            }
            
        </div>
    );
};

export default Review;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user]=useAuthState(auth);
    const handleSubmit=event=>{
        event.preventDefault();
        const customerReview=event.target.review.value;
        const review={
            customerReview,
            name:user.displayName,
        }
        fetch('https://floating-atoll-49766.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast('Thanks for your comments.');
        });
    }
    return (
        <div>
            <h1 className='text-2xl text-bold text-accent'>Please Give your Review:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <textarea style={{width:"550px",textAlign:"center"}} className='border-2 w-84' name='review'placeholder='Write Your Review'></textarea>

                </div>
                <button className='btn btn-xs' type='submit'>submit</button>
            </form>
        </div>
    );
};

export default AddReview;
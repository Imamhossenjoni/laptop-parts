import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ part, setPart }) => {
    const { _id, name, available,price } = part;
    const [user, loading, error] = useAuthState(auth);
    // const [error,setError]=useState('');
    // const [agree,setAgree]=useState(false);
    const handleBooking = event => {
        event.preventDefault();
        const order = event.target?.order?.value;
        const email = user?.email;
        const phone = event.target?.phone?.value;
        const address = event.target?.address?.value;
        const totalPrice=order*price;
        const booking = {
            partId: _id,
            part: name,
            email: email,
            order: order,
            phone: phone,
            address: address,
            user:user?.displayName,
            price:price,
            totalPrice:totalPrice
        }
        fetch('https://floating-atoll-49766.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Booking Done');
            })
        setPart(null);

        // if(order<499){
        //     setError('You must need to minimum order 500');
        //     setAgree(!agree);
        // }
        console.log(order);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">Name :{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">User Name:</span>
                            </label>
                            <input type="text" value={user.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                            <label class="label">
                                <span class="label-text">Avaiable Quantity:</span>
                            </label>
                            <input type="text" value={available} placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                            <label class="label">
                                <span class="label-text">Price (per unit):</span>
                            </label>
                            <input type="text" name='price' placeholder="" value={price} class="input input-bordered w-full max-w-xs" />
            
                            <label class="label">
                                <span class="label-text">Minimum Order:</span>
                            </label>
                            <input type="text" name='order' placeholder=""  class="input input-bordered w-full max-w-xs" />
                            {/* <p className='text-red-500'>{error}</p> */}
                            <label class="label">
                                <span class="label-text">Email:</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" value={user?.email} class="input input-bordered w-full max-w-xs" />

                            <label class="label">
                                <span class="label-text">Phone Number:</span>
                            </label>
                            <input type="number" placeholder="Enter Your Phone Number" name='phone' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Address:</span>
                            </label>
                            <input type="text" name='address' placeholder="Enter Your Address" class="input input-bordered w-full max-w-xs" />
                            <input type="submit" value='Booked' class="btn btn-accent w-full mt-4 max-w-xs" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
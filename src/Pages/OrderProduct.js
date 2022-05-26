import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useParts from '../hooks/useParts';
import BookingModal from './Home/BookingModal';
import Order from './Order';

const OrderProduct = () => {
    const [part,setPart]=useState(null)
    const [parts, setParts] = useParts();

    return (
        <div>
            <h2>Our Products:</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                   parts.map(part=><Order key={part._id} part={part} setPart={setPart}></Order>)
                }
            </div>
            {part && <BookingModal part={part} setPart={setPart}></BookingModal>}
        </div>
    );
};

export default OrderProduct;
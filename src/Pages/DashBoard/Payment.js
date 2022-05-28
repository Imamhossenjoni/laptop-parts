import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L48NRLXEGLi8pbOdnQMwfBXU7UJzNgJkk13E4BFR2BKlGmSNgI42W9pLrhoA25TVKDshd5ws0rpvJRNVXhlrXuG00CO8kJgqy');

const Payment = () => {
    const { id } = useParams();
    const url = `https://floating-atoll-49766.herokuapp.com/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {order?.user}</p>
                <h2 class=" text-center">Please Pay for {order?.part}</h2>
                <p>Please pay: ${order?.totalPrice}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm order={order}></CheckoutForm>
                </Elements>
            </div>
           
        </div>
    </div>
    );
};

export default Payment;
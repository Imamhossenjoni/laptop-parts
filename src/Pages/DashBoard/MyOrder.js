import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`https://floating-atoll-49766.herokuapp.com/booking?email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/home');
          }
          else if (res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/home');
          }
          return res.json()
        })
        .then(data => setOrders(data));
    }
  }, [user])
  return (
    <div>
      <h2>This is ordre pages:{orders?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Order</th>
              <th>Price(per)</th>
              <th>Total Price</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((order, index) => <tr>
                <th>{index + 1}</th>
                <td>{order?.user}</td>
                <td>{order?.part}</td>
                <td>{order?.order}</td>
                <td>{order?.price}</td>
                <td>
                  {
                    (order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs button-success'>Pay</button></Link>
                  }
                  {
                    (order.totalPrice && order.paid) && <span className='text-success'>Paid</span>
                  }
                  </td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
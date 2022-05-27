import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';

const Users = () => {
    // const {data:users,isLoading}=useQuery('users',()=>{fetch('https://floating-atoll-49766.herokuapp.com/user').then(res=>res.json())})
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://floating-atoll-49766.herokuapp.com/user',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl'>Total Users:{users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // users?.map(user => <UserRow
                            //     key={user?._id}
                            //     user={user}
                            //     ></UserRow>)
                            users.map(user=><UserRow key={user._id} user={user}></UserRow>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};


export default Users;
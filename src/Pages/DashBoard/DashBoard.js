import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const DashBoard = () => {
  const [user]=useAuthState(auth);
  const [admin]=useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h2 className='text-purple-500 text-5xl text-bold py-3 '>Welcome to DashBoard</h2>
    <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Order</Link></li>
      <li><Link to='/dashboard/review'>Add Review</Link></li>
      {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;
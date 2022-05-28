import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Part = ({ part,setPart}) => {
    const { _id,price, name, order, img, available } = part;
    const navigate = useNavigate();
    // const handleManage = id => {
    //     navigate(`/parts/${id}`)
    // }

    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-2">
                <img style={{height:'150px'}} src={img}  alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body  text-center pt-0">
                <h2 class=" text-2xl text-primary text-center">{name}</h2>
                <p className='text-sm'>Price:{price}</p>
                <p className='text-sm'>Available:{available}</p>
                <p className='text-sm'>Minimum Order:{order}</p>
                <p className='text-sm'>Discription:</p>
                {/* <div class="card-actions">
                      <label for="booking-modal" className="btn btn-primary" onClick={()=>setPart(part)}>Book Now</label> 
                </div> */}
                {/* <button className='btn btn-primary' onClick={()=>handleManage(_id)}>Details</button> */}
                <div className='flex justify-center text-center'>
                <button className='btn btn-sm bg-primary text-white w-36'><Link className='' to="/orderPage">Order Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Part;
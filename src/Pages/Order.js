import React from 'react';

const Order = ({part,setPart}) => {
    const { _id,price, name, order, img, available } = part;
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img style={{height:'250px'}} src={img}  alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body  text-left">
                <h2 class="card-title text-accent">Name:{name}</h2>
                <p>Price:{price}</p>
                <p>Available:{available}</p>
                <p>Minimum Order:{order}</p>
                <p>Discription:</p>
                <div class="card-actions">
                      <label for="booking-modal" className="btn btn-primary" onClick={()=>setPart(part)}>Book Now</label> 
                </div>
                {/* <button className='btn btn-primary' onClick={()=>handleManage(_id)}>Details</button> */}
            </div>
        </div>
    );
};

export default Order;
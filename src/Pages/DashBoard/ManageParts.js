import React from 'react';
import useParts from '../../hooks/useParts';

const ManageParts = () => {
    const [parts,setParts]=useParts()
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure .?');
        if (proceed) {
            const url = `https://floating-atoll-49766.herokuapp.com/parts/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(req => req.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(part => part._id !== id);
                    setParts(remaining);
                })
        }
    }
    return  (
        <div >
            <h2 className='text-success text-center mt-3 mb-3'>Manage Your Products </h2>
            <div className='manage-products grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    parts.map(part => <div className='border mb-5 border-rounded text-center' key={part._id}>
                        <img style={{height:'250px'}} src={part?.img} alt=''></img>
                        <h5>Name:{part?.name}</h5>
                        <p>Price (per unit):{ part?.price}</p>
                        <p>Available Quantity:{ part?.available}</p>
                        <p>Minimum Order:{ part?.order}</p>
                        <h5><button onClick={() => handleDelete(part._id)} className='btn btn-primary py-2'>Delete</button></h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageParts;
import React from 'react';
import useParts from '../../hooks/useParts';

const ManageParts = () => {
    const [parts,setParts]=useParts()
    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure .?');
    //     if (proceed) {
    //         const url = `https://sheltered-thicket-84216.herokuapp.com/laptops/${id}`;
    //         fetch(url, {
    //             method: 'DELETE',
    //         })
    //             .then(req => req.json())
    //             .then(data => {
    //                 console.log(data);
    //                 const remaining = parts.filter(part => part._id !== id);
    //                 setParts(remaining);
    //             })
    //     }
    // }
    return  (
        <div >
            <h2 className='text-success text-center mt-3 mb-3'>Manage Your Products </h2>
            <div className='manage-products'>
                {
                    parts.map(part => <div className='border mb-5 border-rounded text-center' key={part._id}>
                        <img height={'250px'} src={part?.img} alt=''></img>
                        <h5>Name:{part?.name}</h5>
                        <p>Price:{ part?.price}</p>
                        <p>Quantity:{ part?.quantity}</p>
                        <p>Discription:{ part?.discription}</p>
                        <p>Minimum Order:{ part?.order}</p>
                        {/* <h5><button onClick={() => handleDelete(part._id)} className='btn btn-primary'>Delete</button></h5> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageParts;
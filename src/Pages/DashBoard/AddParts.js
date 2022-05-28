import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddParts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `https://floating-atoll-49766.herokuapp.com/parts`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data=>{
        console.log(data);
        toast('new parts added!')
      })
  };
  return (
    <div className=' mx-auto'>
      <h2 className='text-primary py-3 text-2xl'>Please add a parts:</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2 border 1px' placeholder='Name'   {...register("name", { required: true, maxLength: 20 })} required /><br />
        <textarea className='mb-2 border 1px' placeholder='Description'  {...register("discription")} required /><br />
        <input className='mb-2 border 1px' placeholder='Price' type="number" {...register("price")} required /><br />
        <input className='mb-2 border 1px' placeholder='Quantity' type="number" {...register("quantity")} required /><br />
        <input className='mb-2 border 1px' placeholder='PhotoURL' type="text" {...register("Img")} required /><br />
        <input className='btn btn-accent' type='submit' value="Add Service" />
      </form>
    </div>
  );
};

export default AddParts;
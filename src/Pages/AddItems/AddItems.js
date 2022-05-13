import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/products`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => console.log(res))
        alert("Item added successfully!")
    };

    return (
        <div className='card bg-[#15263F] lg:w-2/5 h-[40rem] rounded-xl p-6 lg:mx-auto mx-2 mb-5'>
            <h1 className='text-4xl font-bold my-4 text-white'>Add Item</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-3 p-3 w-full rounded-md bg-white' placeholder='Product Name' {...register("name", { required: true })} />
                <input className='my-3 p-3 w-full rounded-md bg-white' placeholder='Image Link' {...register("img", { required: true })} />
                <textarea className='my-3 p-3 w-full rounded-md bg-white' placeholder='Product Description' {...register("description", { required: true })} />
                <input className='my-3 p-3 w-full rounded-md bg-white' placeholder='Quantity' type="number" {...register("quantity", { min: 0 })} />
                <input className='my-3 p-3 w-full rounded-md bg-white' placeholder='Product Price' type="number" {...register("price", { min: 0 })} />
                <input className='my-3 p-3 w-full rounded-md bg-white' placeholder='Supplier' {...register("supplier", { required: true })} />
                <input className='my-3 p-3 w-full rounded-md bg-blue-500 cursor-pointer' type="submit" value="Add New Item" />
            </form>
        </div>
    );
};

export default AddItems;
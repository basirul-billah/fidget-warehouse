import React from 'react';
import useProducts from '../../hooks/useProducts';

const InventoryItems = ({ product }) => {
    const { _id, name, img, price, quantity, supplier } = product;

    const [products, setProducts] = useProducts();

    const handleDelete = _id => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this item?");
        if (confirmDeletion) {
            const url = `https://serene-ravine-32165.herokuapp.com/itemdetails/${_id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== _id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <tr>
            <td className='px-5 border-4'>{name}</td>
            <td className='px-5 border-4'><img className='w-10' src={img} alt="" /></td>
            <td className='px-5 border-4'>${price}</td>
            <td className='px-5 border-4'>{quantity}</td>
            <td className='px-5 border-4'>{supplier}</td>
            <td className='px-5 border-4'>
                <button
                    onClick={() => handleDelete(_id)}
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default InventoryItems;
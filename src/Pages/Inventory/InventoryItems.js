import React from 'react';

const InventoryItems = ({ product }) => {
    let { name, img, price, quantity, supplier } = product;

    const handleDeliverd = () => {
        let quantityObj = JSON.parse(quantity);
        if (quantityObj >= 0) {
            quantityObj--;
        }
        quantity = JSON.stringify(quantityObj)
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
                    onClick={handleDeliverd}
                    className='py-2 px-4 mr-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    Delivered
                </button>

                <button
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    Restock
                </button>
            </td>
        </tr>
    );
};

export default InventoryItems;
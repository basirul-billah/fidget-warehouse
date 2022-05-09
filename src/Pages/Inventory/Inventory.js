import React from 'react';
import product from '../../images/product.jpg'

const Inventory = () => {
    return (
        <div className='my-4'>
            <table className="table-auto mx-auto">
                <thead>
                    <tr className='border-2'>
                        <th className='px-5 border-4'>Product Name</th>
                        <th className='px-5 border-4'>Image</th>
                        <th className='px-5 border-4'>Description</th>
                        <th className='px-5 border-4'>Price</th>
                        <th className='px-5 border-4'>Qty</th>
                        <th className='px-5 border-4'>Supplier</th>
                        <th className='px-5 border-4'>Supplier</th>
                        <th className='px-5 border-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-5 border-4'>Iphone</td>
                        <td className='px-5 border-4'><img className='w-10' src={product} alt="" /></td>
                        <td className='px-5 border-4'></td>
                        <td className='px-5 border-4'>$2000</td>
                        <td className='px-5 border-4'>4</td>
                        <td className='px-5 border-4'>apple</td>
                        <td className='px-5 border-4'>status</td>
                        <td className='px-5 border-4'>

                            <button className='py-2 px-4 mr-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Delivered</button>

                            <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Restock</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
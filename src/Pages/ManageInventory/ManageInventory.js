import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import InventoryItems from '../Inventory/InventoryItems';

const ManageInventory = () => {
    const [products] = useProducts();

    return (
        <div className='my-4'>
            <Link className='flex justify-center m-10' to='/additems'>
                <button
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    Add new item
                </button>
            </Link>
            <div className='overflow-auto'>
                <table className="table-auto mx-auto">
                    <thead>
                        <tr className='border-2'>
                            <th className='px-5 border-4'>Product Name</th>
                            <th className='px-5 border-4'>Image</th>
                            <th className='px-5 border-4'>Price</th>
                            <th className='px-5 border-4'>Qty</th>
                            <th className='px-5 border-4'>Supplier</th>
                            <th className='px-5 border-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <InventoryItems
                                key={product._id}
                                product={product}
                            ></InventoryItems>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInventory;
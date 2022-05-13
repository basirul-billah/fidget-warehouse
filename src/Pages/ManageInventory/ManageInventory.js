import React from 'react';
import useProducts from '../../hooks/useProducts';
import InventoryItems from '../Inventory/InventoryItems';

const ManageInventory = () => {
    const [products] = useProducts();

    return (
        <div className='my-4'>
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
    );
};

export default ManageInventory;
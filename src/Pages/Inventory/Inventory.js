import React, { useEffect, useState } from 'react';
import product from '../../images/product.jpg'
import InventoryItems from './InventoryItems';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

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

export default Inventory;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Item from '../../Components/Item/Item';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='p-4'>
            <Banner></Banner>
            <h1 className='text-3xl font-bold my-4 text-center'>Inventory Items</h1>
            <div className='flex flex-row flex-wrap justify-center'>
                {
                    products.slice(0, 6).map(product => <Item
                        key={product._id}
                        product={product}
                    ></Item>)
                }
            </div>
            <Link className='flex justify-center' to='/manageinventory'>
                <button
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    Manage Inventory
                </button>
            </Link>
        </div>
    );
};

export default Home;
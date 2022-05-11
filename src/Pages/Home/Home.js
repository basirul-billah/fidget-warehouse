import React, { useState, useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import Item from '../../Components/Item/Item';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
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
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Item from '../../Components/Item/Item';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div className='p-4'>
            <Banner></Banner>
            <h1 className='text-3xl font-bold my-4'>Inventory Items</h1>
            <Item></Item>
        </div>
    );
};

export default Home;
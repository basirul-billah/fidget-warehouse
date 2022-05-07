import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div className='p-4'>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;
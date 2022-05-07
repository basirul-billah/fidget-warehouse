import React from 'react';
import Item from '../../Components/Item/Item';

const Inventory = () => {
    return (
        <div className='my-4'>
            <h1 className='text-4xl font-bold mb-4'>Inventory Items</h1>
            <Item></Item>
        </div>
    );
};

export default Inventory;
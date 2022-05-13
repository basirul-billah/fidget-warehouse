import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/itemdetails/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const handleDeliverd = e => {

    }

    const handleRestock = e => {
        let restockQuantity = prompt('Enter quantity');
        console.log(restockQuantity);
    }

    return (
        <div>
            <div className="flex justify-center">

                <div className="p-4 border-gray-400 h-48 lg:h-auto lg:w-48 flex-none border-l border-t border-b rounded-t lg:rounded-t-none lg:rounded-l text-center ">
                    <img src={item.img} alt="" />
                </div>

                <div className="p-4 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">{item.description}</p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <p className="text-gray-900 leading-none">Price: ${item.price} USD</p>
                            <p className="text-gray-900 leading-none">Supplier: {item.supplier}</p>
                            <p className="text-gray-900 leading-none">Quantity: {item.quantity}</p>

                            <button
                                onClick={handleDeliverd}
                                className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                                Delivered
                            </button>

                            <button
                                onClick={handleRestock}
                                className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                                Restock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Link className='flex justify-center mt-10' to='/manageinventory'>
                <button
                    className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                    Manage Inventory
                </button>
            </Link>
        </div>
    );
};

export default ItemDetails;
import React from 'react';

const ItemDetails = () => {
    const { _id, name, img, description, price, quantity, supplier } = product;
    
    return (
        <div className='m-2'>
            <div className="card bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4">
                <img className="w-full h-64 rounded-md transition hover:bg-cyan-300"
                    src={img} alt="" />
                <div id="description" className="space-y-4">
                    <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300">
                        {name}
                    </h2>
                    <p className="text-slate-500 text-sm select-none">{description}</p>
                    <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                        <span id="price" className="text-cyan-300 flex justify-between items-center">
                            $ {price} USD
                        </span>
                        <span className="text-slate-500 flex justify-between items-center select-none">
                            {quantity} products left
                        </span>
                    </div>
                    <div className="flex text-slate-500 text-sm justify-between items-center">
                        <span>Supplier: {supplier}</span>
                        <Link to="/itemdetails/:id">
                            <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Update Stock</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
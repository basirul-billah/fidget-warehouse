import React from 'react';
import { Link } from 'react-router-dom';
import product from '../../images/product.jpg'

const Item = () => {

    return (
        <div>
            <div className="card bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4">
                <a href="#">
                    <img className="w-full h-64 rounded-md transition hover:bg-cyan-300"
                        src={product}
                        alt="" />
                </a>
                <div id="description" className="space-y-4">
                    <a href="#">
                        <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300">
                            Iphone
                        </h2>
                    </a>
                    <p className="text-slate-500 text-sm select-none">Our Equilibrium collection promotes balance and calm.</p>
                    <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                        <span id="price" className="text-cyan-300 flex justify-between items-center">
                            $ 1200 USD
                        </span>
                        <span className="text-slate-500 flex justify-between items-center select-none">
                            4 products left
                        </span>
                    </div>
                    <div className="flex text-slate-500 text-sm justify-between items-center">
                        <span>Supplier:</span>
                        <Link to="/inventory">
                            <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Update Stock</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
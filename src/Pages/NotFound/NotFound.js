import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-red-500">Congratulations!</span>
                    </h6>

                    <h1 className="font-bold text-[#15263F] text-9xl">404</h1>

                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        If you're looking for something that doesn't exists you have totally found it!
                    </p>

                    <Link to='/home'>
                        <button
                            className="px-6 py-2 text-sm font-semibold rounded-xl text-[#15263F] bg-blue-100"
                        >Go home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
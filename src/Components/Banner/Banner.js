import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img className='w-full rounded-xl' src={banner} alt="warehouse-banner" />
        </div>
    );
};

export default Banner;
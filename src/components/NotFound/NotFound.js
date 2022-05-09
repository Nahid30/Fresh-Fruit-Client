import React from 'react';
import img from '../../../src/images/404.jpeg';

const NotFound = () => {
    return (
        <div className='container'>
            <h3 className='text-danger text-center my-5'>Page Not Found 404</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;
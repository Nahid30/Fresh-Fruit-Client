import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div  className='bg-dark text-muted text-center mt-5 custom'>
            <p className='py-5'>Copyrights &copy; {year} | All Rights Reserved by FreshFruits.com  </p>
        </div>
    );
};

export default Footer;
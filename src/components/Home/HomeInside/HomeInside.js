import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Extra from '../../Extra/Extra';
import Banner from '../Banner/Banner';
import SingleCart from '../SingleCart/SingleCart';

const HomeInside = () => {
    const [carts, setCarts] = useState([]);
    const showSixCarts = [...carts.slice(0, 6)]

    useEffect(() => {
        fetch('https://shielded-tor-56845.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    let navigate = useNavigate();

    return (
        <div>
            <Banner></Banner>

            <div className='text-center'>
                <h1 className='my-4'>
                    <span className='text-danger'>F</span>
                    <span className='text-warning'>r</span>
                    <span className='text-success'>u</span>
                    <span className='text-danger'>i</span>
                    <span className='text-warning'>t</span>
                    <span className='text-success'>s</span>
                    <span className='ms-3'>items</span>
                </h1>
            </div>

            <Row className='gy-5 container mx-auto' md={2} lg={3} xs={1}>
                {
                    showSixCarts.map(cart => <SingleCart
                        key={cart._id}
                        cart={cart}
                    ></SingleCart>)
                }
                <button className='btn btn-warning' onClick={() => navigate('/inventory')}>Manage Inventories</button>
            </Row>

            <Extra></Extra>

            <h2 className='text-center text-secondary'>Warehouse Video</h2>

            <div className='container d-flex justify-content-center my-5'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FimT9Fz4blE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    );
};

export default HomeInside;
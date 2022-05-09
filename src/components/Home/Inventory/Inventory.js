import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InventoryCard from '../../InventoryCard/InventoryCard';
import SingleCart from '../SingleCart/SingleCart';

const Inventory = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://shielded-tor-56845.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    let navigate = useNavigate();


    return (
        <div>
            
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

            <div className='d-flex justify-content-center my-4'>
                <button className='btn btn-warning' onClick={() => navigate('/addnewitem')}>Add New Item</button>
            </div>

            <Row className='gy-5 container mx-auto' md={2} lg={3} xs={1}>
                {
                    carts.map(cart => <InventoryCard
                        key={cart._id}
                        cart={cart}
                    ></InventoryCard>)
                }


            </Row>
           

        </div>
    );
};

export default Inventory;
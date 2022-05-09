import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const ManageInventories = () => {
    const { itemId } = useParams()
    const [user, loading] = useAuthState(auth);


    const [carts, setCarts] = useState({});
    const [update, setUpdate] = useState({});

    useEffect(() => {
        fetch(`https://shielded-tor-56845.herokuapp.com/item/${itemId}`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [update])

    const navigate = useNavigate();


    const handleDeliver = id => {
        const newQuantity = parseInt(carts.quantity) - 1;
        const updateQuantity = { quantity: newQuantity }

        const url = `https://shielded-tor-56845.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data);

            })
    }

    const handleRestock = event => {
        event.preventDefault();
        const number = event.target.number.value;


        const newQuantity = parseInt(carts.quantity) + parseInt(number);
        const updateQuantity = { quantity: newQuantity }

        const url = `https://shielded-tor-56845.herokuapp.com/item/${carts._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data);
                event.target.reset()

            })

    }





    return (
        <Row>



            <Col>
                <Card className='shadow mx-auto mt-4' style={{ width: '18rem' }}>
                    <Card.Img variant="top" height={200} src={carts.img} />
                    <Card.Body >
                        <Card.Title>{carts.name}</Card.Title>
                        <Card.Text>Supplier Name: {carts.supplierName}</Card.Text>
                        <Card.Text className='m-0'>Price: <span className='text-danger'>${carts.price}</span></Card.Text>
                        <Card.Text>Quantity: {carts.quantity}</Card.Text>
                        <Card.Text> <span className='text-secondary'>{carts.text}</span> </Card.Text>
                        <Button onClick={() => handleDeliver(carts._id)} variant="success">Delivered</Button>
                    </Card.Body>

                </Card>
                
                <div className='d-flex justify-content-center  my-4'>
                    <button className='btn btn-warning ' onClick={() => navigate('/inventory')}>Manage Inventories</button>
                </div>
                

            </Col>

            <Col className='d-flex align-items-center'>
                <div className='mx-auto'>
                    <form onSubmit={handleRestock}>
                        <input className='w-100 p-3' type="number" name="number" placeholder='Enter Your Quantity Stock' id="" required />
                        <input className='btn btn-success mt-2' type="submit" value="Restock" />
                    </form>
                </div>

            </Col>



        </Row>
    );
};

export default ManageInventories;
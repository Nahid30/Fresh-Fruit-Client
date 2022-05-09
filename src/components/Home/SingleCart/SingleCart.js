import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleCart.css';

const SingleCart = ({cart}) => {

    const navigate = useNavigate();

    const { name, img, price, _id, text, quantity, supplierName } = cart;

    const navigateToCartDetail = id =>{
        navigate(`/item/${id}`);
    }

    return (
        <div>
            <Col>
                <Card className='shadow' style={{ width: '18rem'}}>
                    <Card.Img variant="top" height={200} src={img} />
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Supplier Name: {supplierName}</Card.Text>
                        <Card.Text className='m-0'>Price: <span className='text-danger'>${price}</span></Card.Text>
                        <Card.Text>Quantity: {quantity}</Card.Text>
                        <Card.Text> <span className='text-secondary'>{text}</span> </Card.Text>
                        <Button onClick={ () => navigateToCartDetail (_id) } variant="success">Stock Update</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCart;
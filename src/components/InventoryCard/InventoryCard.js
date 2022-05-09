import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../hooks/useItems';

const InventoryCard = (props) => {
    const { name, img, price, _id, text, quantity, supplierName } = props.cart;
    const [carts, setCarts] = useItems();
    const navigate = useNavigate()

    const navigateToCartDetail = id =>{
        navigate(`/item/${id}`);
    }

   
    const handleDelete = id =>{       
        navigate('/manageitem');

    }
    return (
        <div>
            <Col>
                <Card className='shadow' style={{ width: '18rem' }}>
                    <Card.Img variant="top" height={200} src={img} />
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Supplier Name: {supplierName}</Card.Text>
                        <Card.Text className='m-0'>Price: <span className='text-danger'>${price}</span></Card.Text>
                        <Card.Text>Quantity: {quantity}</Card.Text>
                        <Card.Text> <span className='text-secondary'>{text}</span> </Card.Text>
                        <Button onClick={ ()=> handleDelete(_id) } variant="danger">Go To Delete</Button>
                        <Button className='ms-3' onClick={ () => navigateToCartDetail (_id) } variant="success">Stock Update</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default InventoryCard;
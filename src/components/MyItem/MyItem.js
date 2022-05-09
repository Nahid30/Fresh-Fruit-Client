import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../hooks/useItems';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    const [carts, setCarts] = useItems();

    console.log(user.email);


    useEffect(() => {
        fetch(`https://shielded-tor-56845.herokuapp.com/myitem?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure You want to Delete?')
        if (proceed) {
            const url = `https://shielded-tor-56845.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = carts.filter(cart => cart._id !== id)
                    setCarts(remaining);
                })
        }
    }



    return (
        <div>
            <h3 className='text-center text-secondary my-4'>My Added items </h3>


            <Row className='container mx-auto ' md={2} lg={3} xs={1}>


                {
                    myItems.map(cart => <div className='border m-4 p-4 rounded mx-auto' key={cart?._id}>
                        <h4>Name : {cart?.name} </h4>
                        <h6>Price: {cart?.price} </h6>
                        <h6>Quantity: {cart?.quantity}</h6>
                        <img src={cart?.img} height={140} alt="" />
                        <p className='my-2'><button className='rounded btn btn-danger' onClick={() => handleDelete(cart?._id)}>Delete</button></p>
                    </div>)
                }
            </Row>

        </div>
    );
};

export default MyItem;
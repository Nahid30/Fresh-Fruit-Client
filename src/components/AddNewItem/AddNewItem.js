import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const AddNewItem = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newData = {...data, email: user.email} 
        console.log(data)
        console.log(newData)
        const url = `https://shielded-tor-56845.herokuapp.com//item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)  
        })
        .then(res => res.json())
        .then(result => console.log(result));

        toast('Successfully Added New Cart')
       
    };

    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-center text-secondary my-5'>Add New Item Here</h2>

            <ToastContainer></ToastContainer>

            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-3'  {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Supplier Name' className='mb-3'  type="text" {...register("supplierName", )} />
                <input placeholder='Price' className='mb-3'  type="number" {...register("price", )} />
                <input placeholder='Quantity' className='mb-3'  type="number" {...register("quantity", )} />
                <textarea placeholder='Description' className='mb-3'  {...register("text", )} />
                <input placeholder='Enter Image URL Link' className='mb-3'  type="text" {...register("img", )} />
                <input className='bg-success text-white' type="submit" value="Add New Item" />

            </form>

        </div>
    );
};

export default AddNewItem;
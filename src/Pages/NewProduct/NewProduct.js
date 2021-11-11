import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import './NewProduct.css'

const NewDestination = () => {
    const history = useHistory()

    const nameRef = useRef()
    const typeRef = useRef()
    const imageRef = useRef()
    const priceRef = useRef()
    const transRef = useRef()
    const wheelRef = useRef()
    const runRef = useRef()

    // ADD an Destination
    const submitHandler = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const type = typeRef.current.value
        const img = imageRef.current.value
        const price = priceRef.current.value
        const transmission = transRef.current.value
        const wheel = wheelRef.current.value
        const run = runRef.current.value

        const newProduct = { name, img, type, price, transmission, wheel, run }

        //     axios.post('https://traveezy.herokuapp.com/services', newProduct)
        //         .then(function (res) {
        //             if (res.data.insertedId) {
        //                 toast.success("Added Destination Successfully")
        //                 e.target.reset()
        //                 setTimeout(() => history.push(`/services`), 2000);
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         })
    }

    return (
        <div className="container py-2">
            <ScrollButton />
            <Helmet>
                <title>New Product | Corify</title>
                <meta name="This is the New Product page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <form onSubmit={submitHandler} className="addnew w-50 mx-auto">
                <div className="fw-bold">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <TextField required fullWidth ref={nameRef} size="small" variant="standard" placeholder="Enter Product Title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label><br />
                        <TextField required fullWidth ref={imageRef} size="small" variant="standard" placeholder="Please Give Valid Image URL" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <TextField required fullWidth type="number" ref={priceRef} size="small" variant="standard" placeholder="Enter Product Price" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Body Type</label>
                        <TextField required fullWidth ref={typeRef} size="small" variant="standard" placeholder="Enter Product Body Type" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Transmission</label>
                        <TextField required fullWidth ref={transRef} size="small" variant="standard" placeholder="Enter Product Transmission Type" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Wheel Drive</label>
                        <TextField required fullWidth ref={wheelRef} size="small" variant="standard" placeholder="Enter Product Wheel Drive Type" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Already Run</label>
                        <TextField required fullWidth type="number" ref={runRef} size="small" variant="standard" placeholder="Enter Product Transmission Type" />
                    </div>
                </div>
                <div className="text-center">
                    <Button type="submit" fullWidth variant="contained">Add New Product</Button>
                </div>
            </form>
        </div>
    );
};

export default NewDestination;
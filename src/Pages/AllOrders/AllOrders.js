import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import './AllOrders.css'
import { Helmet } from 'react-helmet';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Button } from '@mui/material';

const AllOrders = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://traveezy.herokuapp.com/userServices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    // delete a service
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconClass: "custom-icon",
            showCancelButton: true,
            confirmButtonClass: "swal-button",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonClass: "swal-button",
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://traveezy.herokuapp.com/userServices/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.error("Deleted Order Successfully")
                            const remainingServices = services.filter(product => product._id !== id)
                            setServices(remainingServices)
                        }
                    })
            }
        })
    }

    // update order 
    const handleApprove = (id) => {
        const userProduct = []
        services.filter(product => (product._id === id) && userProduct.push(product))
        const updatedStatus = "Approved"
        const updatedOrder = { ...userProduct }
        updatedOrder.status = updatedStatus

        axios.put(`https://traveezy.herokuapp.com/userProducts/${id}`, updatedOrder)
            .then(function (res) {
                if (res.data.modifiedCount > 0) {
                    toast.success("Updated Order Successfully")
                }
            })
            .catch(function (error) {
                toast.error(error);
            })
    }
    const test = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            <ScrollButton />
            <Helmet>
                <title>Manage All Orders | Corify</title>
                <meta name="This is the Manage All Orders page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="container p-4">
                <ToastContainer theme="colored" />
                <div className="row row-cols-1 row-cols-xl-2 g-4">
                    {
                        test.map(product => {
                            return <div className="col" key={product._id}>
                                <div className="bg-light shadow-sm radius p-3 d-md-flex service-body">
                                    <div className="text-center mb-2 mb-lg-0">
                                        <img src="https://i.ibb.co/0rmLTmq/chevrolet-camaro-zl1-cornering.jpg" alt="" className="img-fluid srv-img radius me-3" />
                                    </div>
                                    <div>
                                        <h5>Name: {product.name}</h5>
                                        <p className="mb-0"><span className="fw-light">Email: </span> {product.email ? product.email : "Not Available"}</p>
                                        <p className="mb-0"><span className="fw-light">Product: </span>{product.title}</p>
                                        <p className="mb-0"><span className="fw-light">Type: </span>{product.type}</p>
                                        <p className="mb-0"><span className="fw-light">Price: $</span>{product.price}</p>
                                        <p className="status">{product.status}</p>
                                        <div className="service-btn">
                                            <Button variant="contained" size="small" color="success" className="me-2" onClick={() => handleApprove(product._id)} >Approve</Button>
                                            <Button variant="contained" size="small" color="error" onClick={() => handleDelete(product._id)}>Cancel</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
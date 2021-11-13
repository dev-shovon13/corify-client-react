import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import './AllOrders.css'
import { Helmet } from 'react-helmet';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import { Button } from '@mui/material';

const AllOrders = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://corify.herokuapp.com/userProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    // delete a order
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
                axios.delete(`https://corify.herokuapp.com/userProducts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success("Deleted Order Successfully")
                            const remainingProducts = products.filter(product => product._id !== id)
                            setProducts(remainingProducts)
                        }
                    })
            }
        })
    }

    // update order 
    const handleApprove = (id) => {
        const userProduct = []
        products.filter(product => (product._id === id) && userProduct.push(product))
        const updatedStatus = "Shipped"
        const updatedOrder = { ...userProduct }
        updatedOrder.status = updatedStatus

        axios.put(`https://corify.herokuapp.com/userProducts/${id}`, updatedOrder)
            .then(function (res) {
                if (res.data.modifiedCount > 0) {
                    toast.success("Updated Order Successfully")
                }
            })
            .catch(function (error) {
                toast.error(error);
            })
    }
    // const test = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            <Helmet>
                <title>Manage All Orders | Corify</title>
                <meta name="This is the Manage All Orders page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <ScrollButton />
            <div className="container p-4">
                <div className="row row-cols-1 row-cols-xl-2 g-4">
                    {
                        products.map(product => {
                            return <div className="col" key={product._id}>
                                <div className="bg-light shadow-sm radius p-3 d-md-flex service-body align-items-center">
                                    <div className="text-center mb-2 mb-lg-0">
                                        <img src={product.img} alt="" className="img-fluid srv-img radius me-3 shadow" />
                                    </div>
                                    <div>
                                        <h5 className="mb-0">
                                            <span className="carter-font text-secondary">Name: </span>
                                            <span className="blue"> {product.name}</span>
                                        </h5>
                                        <div className="mb-0">
                                            <span className="fw-light carter-font text-secondary">Email: </span>
                                            <span className="blue">{product.email ? product.email : "Not Available"}</span>
                                        </div>
                                        <div className="mb-0">
                                            <span className="fw-light carter-font text-secondary">Product: </span>
                                            <span className="blue">{product.title}</span>
                                        </div>
                                        <div>
                                            <span className="fw-light carter-font text-secondary">Type: </span>
                                            <span className="blue">{product.type}</span>
                                        </div>
                                        <div className="align-items-center">
                                            <span className="fw-light carter-font text-secondary">Price: </span>
                                            <h6 className="d-inline fw-bold text-warning">$</h6>
                                            <span className="mb-0 text-success fw-bold" >{product.price}</span>
                                        </div>
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
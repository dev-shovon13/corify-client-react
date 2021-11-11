import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://traveezy.herokuapp.com/userProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const userProducts = []
    products.filter(product => (product.currentUser === user.uid) && userProducts.push(product))

    // delete a product 
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
                axios.delete(`https://traveezy.herokuapp.com/userProducts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.error("Deleted Order Successfully")
                            const remainingProducts = products.filter(product => product._id !== id)
                            setProducts(remainingProducts)
                        }
                    })
            }
        })
    }

    const test = [1, 2, 3]

    return (
        <div >
            <ScrollButton />
            <Helmet>
                <title>My Orders | Corify</title>
                <meta name="This is the My Orders page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <div className="container p-4">
                <div className="row row-cols-1 row-cols-xl-2 g-4">
                    {
                        // userProducts.length === 0 ? <h2 className="text-center text-success w-75 mx-auto">You Have No Orders</h2>
                        //     :
                        //     userProducts.map(product => {
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

export default MyOrders;
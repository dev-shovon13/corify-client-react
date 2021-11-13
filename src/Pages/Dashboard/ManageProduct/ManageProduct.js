import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import axios from 'axios';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import '../../Products/Products.css'
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://corify.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

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
                axios.delete(`https://corify.herokuapp.com/products/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success("Deleted Product Successfully")
                            const remainingProducts = products.filter(product => product._id !== id)
                            setProducts(remainingProducts)
                        }
                    })
            }
        })
    }
    return (
        <div className="bg p-3">
            <Helmet>
                <title>Manage Products | Corify</title>
                <meta name="This is the Manage Products page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <div className="">
                <div className="text-center row row-cols-1 g-3">
                    {
                        products.map(product => {
                            return <div key={product._id} className="col">
                                <div className="h-100 bg-white shadow-sm border rounded p-2">
                                    <div className="row align-items-center">
                                        <div className="col-md-4 col-lg-3 col-12 text-center">
                                            <img src={product.img} alt="" className="img-fluid product-img-manage rounded" />
                                        </div>
                                        <div className="col-md-8 col-lg-9 px-4 px-lg-0 py-2 py-lg-0 row">
                                            <div className="col-lg-6 col-12">
                                                <h5 className="text-start car-name blue text-capitalize">{product.name}</h5>
                                                <p className="text-start text-secondary mb-0 text-capitalize">{product.type}</p>
                                                <h4 className="text-start product-txt mt-2">$ {product.price}</h4>
                                            </div>
                                            <div className="col-lg-3 col-12 d-flex d-lg-block justify-content-between">
                                                <div className="d-flex mb-2">
                                                    <span className="fw-light text-capitalize"><SpeedIcon /> {product.transmission}</span>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <span className="fw-light text-uppercase"><SettingsIcon /> {product.wheel}</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="fw-light"><MapIcon /> {product.run} KM</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center">
                                                <div>
                                                    <Link to={`/updateProduct/${product._id}`} >
                                                        <Button variant="contained" size="small" className="banner-btn text-capitalize text-white edit rounded-0 width my-1">
                                                            <div className="row">
                                                                <span className="col-3"><EditIcon /></span>
                                                                <span className="text-start col-9">EDIT</span>
                                                            </div>
                                                        </Button>
                                                    </Link>
                                                    <Button onClick={() => handleDelete(product._id)} variant="contained" size="small" className="banner-btn text-capitalize text-white bg-danger rounded-0 width my-1">
                                                        <div className="row">
                                                            <span className="col-3"><DeleteIcon /></span>
                                                            <span className="text-start col-9">DELETE</span>
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default ManageProduct;
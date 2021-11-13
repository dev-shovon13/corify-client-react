import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import { Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';


const UpdateProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`https://corify.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // update product 
    const updateName = (e) => {
        const updatedName = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.name = updatedName
        setProduct(updatedProduct)
    }
    const updateImg = (e) => {
        const updatedImg = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.img = updatedImg
        setProduct(updatedProduct)
    }
    const updateType = (e) => {
        const updatedType = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.type = updatedType
        setProduct(updatedProduct)
    }
    const updateTransmission = (e) => {
        const updatedTransmission = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.transmission = updatedTransmission
        setProduct(updatedProduct)
    }
    const updateWheel = (e) => {
        const updatedWheel = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.wheel = updatedWheel
        setProduct(updatedProduct)
    }
    const updateRun = (e) => {
        const updatedRun = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.run = updatedRun
        setProduct(updatedProduct)
    }
    const updatePrice = (e) => {
        const updatedPrice = e.target.value
        const updatedProduct = { ...product }
        updatedProduct.price = updatedPrice
        setProduct(updatedProduct)
    }

    // update a product 
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`https://corify.herokuapp.com/products/${id}`, product)
            .then(function (res) {
                if (res.data.modifiedCount > 0) {
                    toast.success("Updated Product Successfully")
                    setTimeout(() => history.goBack(), 2000);
                } else {
                    toast.info("No Changes Made")
                }
            })
            .catch(function (error) {
                toast.error(error);
            })
    }
    return (
        <div className="container pb-5">
            <ScrollButton />
            <Helmet>
                <title>Update Product | Corify</title>
                <meta name="This is the Update Product page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <h3 className="text-center py-2 bg-light mb-3 theme">Update Product</h3>
            <div className="bg-light shadow-sm border rounded p-2 mb-5">
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
                    </div>
                </div>
            </div>
            <form onSubmit={submitHandler} className="fw-bold">
                <div className="row g-lg-4">
                    <div className="col-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <TextField required fullWidth value={product.name || ""} onChange={updateName} size="small" variant="standard" placeholder="Enter Product Title" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label><br />
                            <TextField required fullWidth value={product.img || ""} onChange={updateImg} size="small" variant="standard" placeholder="Please Give Valid Image URL" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Body Type</label>
                            <TextField required fullWidth value={product.type || ""} onChange={updateType} size="small" variant="standard" placeholder="Enter Product Body Type" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Transmission</label>
                            <TextField required fullWidth value={product.transmission || ""} onChange={updateTransmission} size="small" variant="standard" placeholder="Enter Product Transmission Type" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Wheel Drive</label>
                            <TextField required fullWidth value={product.wheel || ""} onChange={updateWheel} size="small" variant="standard" placeholder="Enter Product Wheel Drive Type" />
                        </div>
                        <div className="row g-md-4">
                            <div className="col-12 col-md-7 mb-3">
                                <label className="form-label">Already Run</label>
                                <TextField required fullWidth type="number" value={product.run || ""} onChange={updateRun} size="small" variant="standard" placeholder="Enter Product Already Run" />
                            </div>
                            <div className="col-12 col-md-5 mb-3">
                                <label className="form-label">Price</label>
                                <TextField required fullWidth type="number" value={product.price || ""} onChange={updatePrice} size="small" variant="standard" placeholder="Enter Product Price" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center w-50 mx-auto addnew mt-4">
                    <Button type="submit" fullWidth variant="contained" size="medium" className="banner-btn drive text-white">
                        <EditIcon className="me-2" /> Submit Update
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
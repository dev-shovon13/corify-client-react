import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const PlaceOrder = () => {
    const { user } = useAuth()
    const history = useHistory()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://corify.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    const addressRef = useRef()
    const currentUser = user.uid

    const submitHandler = (e) => {
        e.preventDefault()
        const address = addressRef.current.value
        const name = nameRef.current.value
        const email = emailRef.current.value
        const number = numberRef.current.value
        const title = product.name
        const img = product.img
        const type = product.type
        const price = product.price
        const status = "Pending"

        const newProduct = { currentUser, name, email, address, number, title, img, type, price, status }

        axios.post('https://corify.herokuapp.com/userProducts', newProduct)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success("Placed Order Successfully")
                    e.target.reset()
                    // setUserEvent({})
                    setTimeout(() => history.push(`/products`), 2000);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="container my-5">
            <ToastContainer theme="colored" />
            <Helmet>
                <title>Place Order | Corify</title>
                <meta name="This is the Place Order page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <div className="h-100 mb-3 car-card car-card-order">
                        <img src={product.img} alt="" className="img-fluid product-img product-img-order" />
                        <h4 className="text-start product-txt my-2">$ {product.price}</h4>
                        <p className="text-start text-secondary mb-0">{product.type}</p>
                        <h5 className="text-start car-name blue pb-2 border-bottom">{product.name}</h5>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex px-2">
                                <span className="fw-light"><SpeedIcon /> {product.transmission}</span>
                            </div>
                            <div className="d-flex px-2 border-start border-end">
                                <span className="fw-light"><SettingsIcon /> {product.wheel}</span>
                            </div>
                            <div className="d-flex px-2">
                                <span className="fw-light"><MapIcon /> {product.run} KM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h5 className="text-center theme border-bottom py-2 mb-3 rounded bg-light">Customer Details</h5>
                    <form action="" onSubmit={submitHandler}>
                        <div className="mb-4">
                            <TextField fullWidth size="small" label="Name" variant="outlined" value={user.displayName || user.email.substring(0, user.email.lastIndexOf("@")) || ""} inputRef={nameRef} />
                        </div>
                        <div className="mb-4">
                            <TextField required fullWidth size="small" label="Email" variant="outlined" placeholder="Email" value={user.email} inputRef={emailRef} />
                        </div>
                        <div className="mb-4">
                            <TextField fullWidth size="small" label="Phone Number" variant="outlined" placeholder="Phone Number" inputRef={numberRef} />
                        </div>
                        <div className="mb-4">
                            <TextField fullWidth size="small" label="Address" variant="outlined" placeholder="Address" inputRef={addressRef} />
                        </div>
                        <Button fullWidth variant="contained" type='submit' className="banner-btn drive text-white">
                            <AddShoppingCartIcon className="me-2" />Confirm Order
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
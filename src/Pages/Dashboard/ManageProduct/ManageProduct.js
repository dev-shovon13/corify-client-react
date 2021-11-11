import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../Products/Products.css'
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';

const ManageProduct = () => {
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const { _id, img, name, type, run, transmission, price, wheel } = props.product

    const notify = () => {
        if (!user.uid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Log In to Continue!',
            })
        }
    }
    return (
        <div className="pb-5">
            <Helmet>
                <title>Manage Products | Corify</title>
                <meta name="This is the Manage Products page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="container">
                <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        products.map(product => {
                            return <div className="col">
                                <div className="h-100 mb-3 car-card">
                                    <div className="car-img-box">
                                        <img src={product.img} alt="" className="img-fluid product-img" />
                                    </div>
                                    <h4 className="text-start product-txt my-2">${product.price}</h4>
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
                                    <Button onClick={notify} variant="contained" size="small" className="banner-btn drive me-2 text-white fw-bold rounded-0">
                                        <DeleteIcon />DELETE
                                    </Button>
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
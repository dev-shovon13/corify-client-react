import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../../../hooks/useAuth';
import '../Products.css'

const Service = (props) => {
    const { user } = useAuth()
    const { _id, img, name, type, run, transmission, price, wheel } = props.product

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
        <div className="col">
            <div className="h-100 mb-3 car-card">
                <div className="car-img-box">
                    <img src={img} alt="" className="img-fluid product-img" />
                </div>
                <h4 className="text-start product-txt my-2">${price}</h4>
                <p className="text-start text-secondary mb-0 text-capitalize">{type}</p>
                <h5 className="text-start car-name blue pb-2 border-bottom text-capitalize">{name}</h5>
                <div className="d-flex justify-content-between">
                    <div className="d-flex px-2 px-md-1">
                        <span className="fw-light text-capitalize d-flex flex-column d-sm-block justify-content-center"><span><SpeedIcon /></span> <span>{transmission}</span></span>
                    </div>
                    <div className="d-flex px-2 px-md-1 border-start border-end">
                        <span className="fw-light px-3 px-md-0 text-capitalize d-flex flex-column d-sm-block justify-content-center"><span><SettingsIcon /></span> <span>{wheel.toUpperCase()}</span></span>
                    </div>
                    <div className="d-flex px-2 px-md-1">
                        <span className="fw-light text-capitalize d-flex flex-column d-sm-block justify-content-center"><span><MapIcon /></span> <span>{run} KM</span></span>
                    </div>
                </div>
                <div className="middle">
                    <Link to={"/placeOrder/" + _id} className="buy-btn">
                        <div className="buy-nw">
                            <Button onClick={notify} variant="contained" size="small" className="banner-btn drive me-2 text-white fw-bold rounded-0">
                                <AddShoppingCartIcon />Buy Now
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Service;
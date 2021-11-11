import React from 'react';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../Products/Products.css'
import './ManageProduct.css'

const ManageProductSinge = (props) => {
    const { user } = useAuth()

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
        <div className="col">
            <div className="h-100 bg-white shadow-sm car-card  border rounded p-2">
                <div className="row">
                    <div className="col-3 text-center">
                        <img src="https://i.ibb.co/44D8VWr/15-1099x642-1.jpg" alt="" className="img-fluid product-img-manage rounded" />
                    </div>
                    <div className="col-9 row">
                        <div className="col-6">
                            <h5 className="text-start car-name blue">name</h5>
                            <p className="text-start text-secondary mb-0">type</p>
                            <h4 className="text-start product-txt mt-2">$ price</h4>
                        </div>
                        <div className="col-3">
                            <div className="d-flex mb-2">
                                <span className="fw-light"><SpeedIcon /> transmission</span>
                            </div>
                            <div className="d-flex mb-2">
                                <span className="fw-light"><SettingsIcon /> wheel</span>
                            </div>
                            <div className="d-flex">
                                <span className="fw-light"><MapIcon /> run KM</span>
                            </div>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <Button onClick={notify} variant="contained" size="small" className="banner-btn text-capitalize text-white bg-danger rounded-0">
                                <DeleteIcon className="me-2" />DELETE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductSinge;
import React from 'react';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container text-white pt-5">
                <p className="sub-header pt-5">LIMITED EDITION</p>
                <h2 className="header">PORSCHE</h2>
                <p className="header-bottom pb-5">Cayman <span className="brown">S</span></p>
                <h2><span className="price brown">$625</span> / <span className="fs-5">Month</span></h2>
                <h6>$0 first payment paid by Porsche up to $325.</h6>
                <h6>Taxes, title and fees extra. </h6>
                <div className="pt-5 d-flex">
                    <Button variant="contained" size="large" className="banner-btn me-2 bg-white text-dark fw-bold rounded-0">
                        Learn More
                    </Button>
                    <Button variant="contained" size="large" className="banner-btn drive me-2 text-white fw-bold rounded-0">
                        <SpeedIcon />Test Drive
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
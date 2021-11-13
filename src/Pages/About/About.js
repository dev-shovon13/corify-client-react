import React from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './About.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalculateIcon from '@mui/icons-material/Calculate';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const About = () => {
    return (
        <div className="py-5">
            <Helmet>
                <title>About | Corify</title>
                <meta name="This is the About page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="col about-bg mb-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
                        <div className="col p-4 pt-0">
                            <p className="text-uppercase ash">CORIFY AUTO CENTER</p>
                            <h1 className="w-75 about-info blue mb-3">EXCELLENT CAR DEALERSHIP</h1>
                            <h5 className="color">Corify is a leading two-sided digital automotive dealership that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.</h5>
                        </div>
                        <div className="col ps-5 p-4 pt-0">
                            <div className="row row-cols-2 g-4 abt-center">
                                <div className="col">
                                    <h1 className="abt-large">900 <sup>+</sup></h1>
                                    <h6 className="blue fw-bold w-75 abt-why">VEHICLES AVAILABLE RIGHT NOW</h6>
                                </div>
                                <div className="col">
                                    <h1 className="abt-large">250 <sup>+</sup></h1>
                                    <h6 className="blue fw-bold w-75 abt-why">HAPPY & TRUSTED CUSTOMERS</h6>
                                </div>
                                <div className="col">
                                    <h1 className="abt-large">125</h1>
                                    <h6 className="blue fw-bold w-75 abt-why">CAR MAKES AND MODELS</h6>
                                </div>
                                <div className="col">
                                    <h1 className="abt-large">68</h1>
                                    <h6 className="blue fw-bold w-75 abt-why">RECOGNITION AND AWARDS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col container pb-5">
                <p className="sub-header text-uppercase blue mb-5">Why Choose Us</p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col h-100">
                        <div className="row align-items-center mb-2">
                            <div className="col-3">
                                <AttachMoneyIcon className="about-icon brown" />
                            </div>
                            <div className="col-9">
                                <h5 className="blue fw-bold">BEST PRICE THAN OTHER DEALERSHIP</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2 text-secondary">
                            <div className="col-3 text-center">
                                <h1 className="about-icon number">1</h1>
                            </div>
                            <div className="col-9">
                                <p className="mb-0 ms-2">High-Quality Cars. Multiple inspections. Free Carfax history report. Complimentary limited warranty</p>
                            </div>
                        </div>
                    </div>
                    <div className="col h-100">
                        <div className="row align-items-center mb-2">
                            <div className="col-3">
                                <CalculateIcon className="about-icon brown" />
                            </div>
                            <div className="col-9">
                                <h5 className="blue fw-bold">EASY ONLINE FINANCING CALCULATOR</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2 text-secondary">
                            <div className="col-3 text-center">
                                <h1 className="about-icon number">2</h1>
                            </div>
                            <div className="col-9">
                                <p className="mb-0 ms-2">Easy online financing calculate in a few minutes. Our 12+ financing partners will compete to get you a highly competitive rate​</p>
                            </div>
                        </div>
                    </div>
                    <div className="col h-100">
                        <div className="row align-items-center mb-2">
                            <div className="col-3">
                                <DirectionsCarIcon className="about-icon brown" />
                            </div>
                            <div className="col-9">
                                <h5 className="blue fw-bold">FAST AND ACCURATE DELIVERY</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2 text-secondary">
                            <div className="col-3 text-center">
                                <h1 className="about-icon number">3</h1>
                            </div>
                            <div className="col-9">
                                <p className="mb-0 ms-2">Get your car or truck shipped to your home or a convenient nearby location. Fast & Accurate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default About;
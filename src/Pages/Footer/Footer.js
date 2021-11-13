import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// this is the footer page
const Footer = () => {
    return (
        <div className="footer pt-md-5 border-top">
            <div className="container">
                <div className="row text-start px-3 text-secondary d-none d-md-flex pb-2">
                    <div className="col-1 col-md-2 col-lg-4 mb-3 mb-md-0">
                        <img src={logo} alt="" height="40px" width="150px" />
                        <div className="d-flex align-items-center my-2 f-body">
                            <FontAwesomeIcon icon={faHome} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">62 B.C.C Road, Dhaka</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faPhoneAlt} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">+88 017 123429847</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faEnvelope} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">Corify@example.com</p>
                        </div>
                    </div>
                    <div className="col-1 col-md-2 col-lg-2 mb-3 mb-md-0">
                        <h5>Help Center</h5>
                        <p className="mb-2 q-link">FAQs</p>
                        <p className="mb-2 q-link">Pricing & Plan</p>
                        <p className="mb-2 q-link">Terms & Conditions</p>
                        <p className="mb-2 q-link">Privacy Policy</p>
                    </div>
                    <div className="col-1 col-md-2 col-lg-2">
                        <h5>Quick Links</h5>
                        <Link to="/home" className="text-decoration-none text-secondary q-link d-block">
                            Home
                        </Link>
                        <Link to="/about" className="text-decoration-none text-secondary q-link d-block">
                            About
                        </Link>
                        <Link to="/products" className="text-decoration-none text-secondary q-link d-block">
                            Products
                        </Link>
                        <Link to="/review" className="text-decoration-none text-secondary q-link d-block">
                            Reviews
                        </Link>
                    </div>
                    <div className="col-1 col-md-2 col-lg-4 mt-3 mt-md-0">
                        <h5>News Letter</h5>
                        <p className="mb-2">Subscribe to our newsletter to get the latest cars discount and promotions</p>
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control rounded-0 py-2 pe-5 me-1" placeholder="Enter Your Email" />
                            <Button variant="contained" size="large" className="drive rounded-0 px-0">
                                <ArrowForwardIosIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-2 bg-gradiant">
                <div className="d-md-flex justify-content-between align-items-center container">
                    <p className="p-3 mb-0 text-secondary ">© 2021 devShovon13. All rights reserved.</p>
                    <div className="d-flex justify-content-center pb-3 pb-md-0 text-secondary">
                        <FontAwesomeIcon icon={faTwitter} className="fa-social-icon icon-1 fs-3 me-3" />
                        <FontAwesomeIcon icon={faFacebook} className="fa-social-icon icon-2 fs-3 me-3" />
                        <FontAwesomeIcon icon={faInstagram} className="fa-social-icon icon-3 fs-3 me-3" />
                        <FontAwesomeIcon icon={faLinkedin} className="fa-social-icon icon-4 fs-3 me-3" />
                        <FontAwesomeIcon icon={faYoutube} className="fa-social-icon icon-5 fs-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
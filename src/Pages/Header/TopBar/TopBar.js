import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
const TopBar = () => {
    return (
        <div className="top-bar bg-white py-3 mb-0 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                <NavLink to="/home" onClick={scrollToTop}>
                    <img
                        src={logo}
                        width="150"
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </NavLink>
                <div className="d-flex me-3 align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-social-icon brown fs-2 me-2 " />
                    <div className="d-flex flex-column">
                        <small className="text-secondary">LOCATION</small>
                        <h6 className=" mb-0">62 B.C.C Road, Dhaka</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center  me-3">
                    <FontAwesomeIcon icon={faPhoneAlt} className="fa-social-icon brown fs-2 me-2 " />
                    <div className="d-flex flex-column">
                        <small className="text-secondary">HOTLINE</small>
                        <h6 className=" mb-0">+88 01800 000000</h6>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faClock} className="fa-social-icon brown fs-2 me-2 " />
                    <div className="d-flex flex-column">
                        <small className="text-secondary">WORKING HOURS</small>
                        <h6 className=" mb-0">MON-FRI: 8.00 - 17.00</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import userAvatar from '../../images/avatar.png'
import './Header.css'

const Header = () => {
    const { user, admin, logOut } = useAuth();
    const notify = () => {
        if (!user.uid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Log In to Continue!',
            })
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink onClick={scrollToTop} className="text-decoration-none quick" activeStyle={{ color: "#CE8339", fontWeight: "bold", borderBottom: "3px solid #CE8339", paddingBottom: "11px" }} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink onClick={scrollToTop} className="text-decoration-none quick" activeStyle={{ color: "#CE8339", fontWeight: "bold", borderBottom: "3px solid #CE8339", paddingBottom: "11px" }} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink onClick={scrollToTop} className="text-decoration-none quick" activeStyle={{ color: "#CE8339", fontWeight: "bold", borderBottom: "3px solid #CE8339", paddingBottom: "11px" }} to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink onClick={scrollToTop} className="text-decoration-none quick" activeStyle={{ color: "#CE8339", fontWeight: "bold", borderBottom: "3px solid #CE8339", paddingBottom: "11px" }} to="/review">Review</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {
                                user.displayName || user.email ?
                                    <div className="d-md-flex align-items-center justify-content-center">
                                        {user.photoURL ?
                                            <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                            :
                                            <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                        {user.displayName ?
                                            <span className="fw-bold text-dark">{user.displayName}{admin && <sup><img src="https://i.ibb.co/B66RmKf/Admin.jpg" width="10px" alt="" /></sup>}</span>
                                            :
                                            <span className="fw-bold text-dark">{user.email.substring(0, user.email.lastIndexOf("@"))}{admin && <sup><img src="https://i.ibb.co/B66RmKf/Admin.jpg" width="10px" alt="" /></sup>}</span>}
                                        <div className="d-flex align-items-center">
                                            <li className="nav-item">
                                                <NavLink onClick={notify} className="nav-link" activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/dashboard">
                                                    <Button variant="outlined" size="small" className="banner-btn theme theme-outline text-capitalize rounded-0 ms-2">
                                                        <DashboardIcon /><span className="ms-2">Dashboard</span>
                                                    </Button>
                                                </NavLink>
                                            </li>
                                            <Button onClick={logOut} style={{ height: '32px' }} variant="contained" size="small" className="banner-btn text-capitalize ms-2 text-white bg-danger rounded-0">
                                                <LoginIcon /><span className="ms-2">Logout</span>
                                            </Button>
                                        </div>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/login">
                                            <Button variant="contained" size="small" className="banner-btn text-capitalize drive  me-3 mb-2 mb-lg-0 text-white  rounded-0">
                                                <LoginIcon /><span className="ms-2">Login</span>
                                            </Button>
                                        </NavLink>
                                        <NavLink to="/signup">
                                            <Button variant="contained" size="small" className="banner-btn me-2 text-capitalize bg-white text-secondary rounded-0">
                                                <FingerprintIcon /><span className="ms-2">Signup</span>
                                            </Button>
                                        </NavLink>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
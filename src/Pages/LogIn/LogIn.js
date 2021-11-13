import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../images/login.png'
import google from '../../images/google.png'
import useAuth from '../../hooks/useAuth';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './LogIn.css'
import logo from '../../images/logo.png'
import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithTwitter, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleGithubSignIn = () => {
        signInWithGithub(location, history)
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook(location, history)
    }
    const handleTwitterSignIn = () => {
        signInWithTwitter(location, history)
    }

    return (
        <div className="log-in-bg pt-5 pb-5 text-center">
            <Helmet>
                <title>Login | Corify</title>
                <meta name="This is the login page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="container mb-5">
                <div className="bg-white rounded shadow p-5 pb-2 g-4 w-75 mx-auto log-sign">
                    <NavLink to="/home" className="text-decoration-none text-info">
                        <img src={logo} alt="" className="log-sign-logo mb-3" />
                    </NavLink>                    <div className="row align-items-center">
                        <div className="login-form col-12 col-lg-6 pt-2 pt-lg-0">
                            <form className="" onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <TextField required fullWidth size="small" label="Email" variant="outlined" placeholder="Email" name="email" onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <TextField required fullWidth type="password" size="small" label="Password" variant="outlined" placeholder="Password" name="password" onChange={handleOnChange} />
                                </div>
                                <div className="mb-3 text-start">
                                    <NavLink to="/login" className="text-decoration-none text-info">Forgot Password ?</NavLink>
                                </div>
                                <Button type="submit" fullWidth variant="contained" size="medium" className="banner-btn drive text-white">
                                    <LoginIcon className="me-2" />Log In
                                </Button>
                                <div className="text-danger fw-bold fs-6">{authError}</div>
                            </form>
                            <div className="border-top mt-2">
                                <p className="my-0 text-secondary fw-bold">or</p>
                                <p className="mt-0 text-secondary">Log In with any of these Accounts</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <img onClick={handleGoogleSignIn} src={google} alt="" style={{ height: "45px" }} className="me-2 border rounded-circle p-1 shadow fs-icon" />
                                    <FontAwesomeIcon onClick={handleGithubSignIn} icon={faGithub} className="me-2 border rounded-circle p-2 shadow fs-icon" />
                                    <FontAwesomeIcon onClick={handleTwitterSignIn} icon={faTwitter} className="icon-twitter me-2 border rounded-circle p-2 shadow fs-icon" />
                                    <FontAwesomeIcon onClick={handleFacebookSignIn} icon={faFacebook} className="icon-facebook me-2 border rounded-circle p-2 shadow fs-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 login-img">
                            <img src={login} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p className="text-secondary pt-3">New Member ? <NavLink to="/signup" className="text-decoration-none"><span className="text-info fw-bold">Register</span></NavLink></p>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default LogIn;
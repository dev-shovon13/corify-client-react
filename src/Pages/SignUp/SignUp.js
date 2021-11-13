import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, TextField } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/logo.png'
import google from '../../images/google.png'
import signup from '../../images/signup.png'
import useAuth from '../../hooks/useAuth';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import './SignUp.css'

const SignUp = () => {
    const [loginData, setLoginData] = useState({});
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const { registerUser, authError, signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithTwitter } = useAuth();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSignUp = e => {
        if (loginData.password !== loginData.password2) {
            toast.error("Your Password Didn't Match")
            return
        }
        if (!checked) {
            toast.error("Checkbox is Required")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
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
        <div className="sign-up-bg text-center">
            <ToastContainer theme="colored" />
            <Helmet>
                <title>Sign Up | Corify</title>
                <meta name="This is the signup page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="container pt-5 pb-4">
                <div className="bg-white rounded shadow p-4 g-4 w-75 mx-auto log-sign">
                    <NavLink to="/home" className="text-decoration-none text-info">
                        <img src={logo} alt="" className="log-sign-logo mb-3" />
                    </NavLink>
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6">
                            <img src={signup} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <form onSubmit={handleSignUp}>
                                <div className="mb-3 d-flex ">
                                    <TextField required fullWidth size="small" label="Name" name="name" variant="outlined" placeholder="Name" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3">
                                    <TextField required fullWidth size="small" label="Email" name="email" variant="outlined" placeholder="Email" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3">
                                    <TextField required fullWidth type="password" size="small" label="Password" variant="outlined" placeholder="Password" name="password" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3">
                                    <TextField required fullWidth type="password" size="small" label="Confirm Password" variant="outlined" placeholder="Confirm Password" name="password2" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3 text-start">
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label text-secondary">I accept the <NavLink to="/signup" className="text-decoration-none text-info">Terms of Use</NavLink> & <NavLink to="/signup" className="text-decoration-none text-info">Privacy Policy</NavLink></label>
                                </div>
                                <Button type="submit" fullWidth variant="contained" size="medium" className="banner-btn drive text-white">
                                    <FingerprintIcon className="me-2" />Sign Up
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
                    </div>
                    <p className="text-secondary pt-2 mb-0">Already have an Account ? <NavLink to="/login" className="text-decoration-none"><span className="text-info fw-bold">Log In</span></NavLink></p>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default SignUp;
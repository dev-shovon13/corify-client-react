import { Button, Rating, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth'

const UserRating = () => {
    const [userRating, setUserRating] = useState(0);
    const history = useHistory()
    const { user } = useAuth()

    const nameRef = useRef()
    const emailRef = useRef()
    const reviewRef = useRef()

    // ADD an Destination
    const submitHandler = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const img = user.photoURL
        const rating = userRating
        const review = reviewRef.current.value

        const newReview = { name, email, img, review, rating }
        //     axios.post('https://traveezy.herokuapp.com/services', newReview)
        //         .then(function (res) {
        //             if (res.data.insertedId) {
        //                 toast.success("Added Review Successfully")
        //                 e.target.reset()
        //                 setTimeout(() => history.push(`/review`), 2000);
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         })
    }
    return (
        <div className="container py-5">
            <Helmet>
                <title>User Rating | Corify</title>
                <meta name="This is the Rating page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <form onSubmit={submitHandler} className="addnew w-50 mx-auto">
                <div className="mb-4">
                    <TextField fullWidth size="small" label="Name" variant="outlined" value={user.displayName || user.email.substring(0, user.email.lastIndexOf("@")) || ""} inputRef={nameRef} />
                </div>
                <div className="mb-4">
                    <TextField required fullWidth size="small" label="Email" variant="outlined" placeholder="Email" value={user.email} inputRef={emailRef} />
                </div>
                <div className="mb-4 d-flex ">
                    <Typography component="legend" className="w-25">Give Rating</Typography>
                    <Rating
                        required
                        className="w-75"
                        value={userRating}
                        onChange={(event, newValue) => {
                            setUserRating(newValue);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <TextField required fullWidth multiline rows={3} size="small" label="Review" variant="outlined" placeholder="Review" inputRef={reviewRef} />
                </div>
                <Button fullWidth variant="contained" type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default UserRating;
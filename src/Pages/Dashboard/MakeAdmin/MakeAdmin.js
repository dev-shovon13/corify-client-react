import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://corify.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    toast.success("Added Admin Successfully")
                    e.target.reset()
                }
            })

        e.preventDefault()
    }
    return (
        <div className="container py-5">
            <ScrollButton />
            <Helmet>
                <title>Make Admin | Corify</title>
                <meta name="This is the Make Admin page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <h4 className="text-center border py-2 w-25 admin-title mx-auto bg-light">Make New Admin</h4>
            <form onSubmit={handleAdminSubmit} className="addnew w-50 mx-auto">
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    className="mb-3 mt-5"
                />
                <div className="text-center">
                    <Button type="submit" variant="contained">Make Admin</Button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;
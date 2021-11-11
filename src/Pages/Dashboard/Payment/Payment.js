import React from 'react';
import { Helmet } from 'react-helmet';
import pay from '../../../images/payment.png'

const Payment = () => {
    return (
        <div className="text-center">
            <Helmet>
                <title>Payment | Corify</title>
                <meta name="This is the Payment page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <img src={pay} alt="" className="w-50 img-fluid" />
        </div>
    );
};

export default Payment;
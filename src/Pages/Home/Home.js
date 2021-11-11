import React from 'react';
import About from '../About/About';
import Review from '../Review/Review';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './Home.css'
import Banner from '../Banner/Banner';
import ProductLimited from '../Products/ProductLimited';

const Home = () => {
    return (
        <>
            <Banner />
            <ProductLimited />
            <About />
            <Review />
            <ScrollButton />
            <Helmet>
                <title>Corify- Automotive Center</title>
                <meta name="This is the Home page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
        </>
    );
};

export default Home;
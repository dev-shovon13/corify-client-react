import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Product from './Product/Product';
import './Products.css'

const ProductLimited = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://corify.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    const size = 6
    const items = products.slice(0, size)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="pb-5">
            <Helmet>
                <title>Products | Corify</title>
                <meta name="This is the Products page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="container">
                <div className="py-3">
                    <h3 className="blue car-title pt-5 pb-3">Our Cars</h3>
                    <div className="d-flex flex-wrap pb-3">
                        <h6 className="cars-header drive me-2 px-3 py-1 rounded text-white">All</h6>
                        <h6 className="cars-header me-2 px-3 py-1 rounded">Best Seller</h6>
                        <h6 className="cars-header me-2 px-3 py-1 rounded">New Arrival</h6>
                        <h6 className="cars-header me-2 px-3 py-1 rounded">Popular</h6>
                        <h6 className="cars-header me-2 px-3 py-1 rounded">Used Cars</h6>
                    </div>
                </div>
                <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        items.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
                <div className="py-5 text-center">
                    <Link to="/products">
                        <Button onClick={scrollToTop} variant="contained" size="large" className="banner-btn drive me-2 text-white fw-bold rounded-0">
                            See All Cars
                        </Button>
                    </Link>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default ProductLimited;
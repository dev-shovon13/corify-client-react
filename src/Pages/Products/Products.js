import React, { useEffect, useState } from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Product from './Product/Product';
import { Helmet } from 'react-helmet';
import './Products.css'
import { Pagination } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        palette: {
            primary: blue,
            secondary: {
                main: '#ffab40',
            },
        },
    },
});


const Products = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const size = 12;
    const handleChange = (event, value) => {
        setPage(value);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        fetch(`https://corify.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count
                const totalPage = Math.ceil(count / size)
                setPageCount(totalPage)
            })
    }, [page])

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
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <ThemeProvider theme={theme}>
                        <Pagination count={pageCount} page={page} onChange={handleChange} shape="rounded" color="primary" />
                    </ThemeProvider>
                </div>
            </div>
            <ScrollButton />
        </div>
    )
};

export default Products;
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollButton from '../../../components/ScrollButton/ScrollButton';
import ManageProductSingle from './ManageProductSingle'
const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="bg p-3">
            <Helmet>
                <title>Manage Products | Corify</title>
                <meta name="This is the Manage Products page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>
            <div className="">
                <div className="text-center row row-cols-1 g-3">
                    {
                        data.map(product => <ManageProductSingle key={product._id} product={product} />)
                    }
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default ManageProduct;
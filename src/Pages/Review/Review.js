import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import React, { useEffect, useState } from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Review.css'
import { Rating } from '@mui/material';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://corify.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="py-4 bg">
            <Helmet>
                <title>Review | Corify</title>
                <meta name="This is the review page of Corify" content="Corify- Car Dealer Website" />
            </Helmet>

            <div className="container pb-5 pt-3">
                <div className=" py-3 text-center text-md-start">
                    <h5 className="color">TESTIMONIAL</h5>
                    <h1 className="service-txt w-50 mx-auto mx-md-0 review-txt">What Our Happy Clients Say</h1>
                </div>

                <div className="mb-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        reviews.map(review => {
                            return <div key={review.review} className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="p-3 rounded">
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <img src={review.img} alt="" className="review-img img-fluid" />
                                            </div>
                                            <div className="col-9 d-flex flex-column">
                                                <h6>{review.name}</h6>
                                                <Rating
                                                    readOnly
                                                    value={parseInt(review.rating)}
                                                />
                                            </div>
                                            <p className="text-secondary text-end mb-0">................................................................... <FormatQuoteIcon /></p>
                                            <p>{review.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <ScrollButton />
        </div>
    );
};

export default Review;
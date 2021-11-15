import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('https://peaceful-journey-32516.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div style={{backgroundColor:'#F6F6F6',paddingBottom:'20px'}}>
            <h2 style={{paddingTop:'25px'}}>Customer Reviews</h2> 
             <div className="reviews-container">
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
                </div>
            
        </div>
    );
};

export default Reviews;
import React from 'react';

import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

import './Product.css';

const Product = ({ id, name, image, price, rating, reviews }) => {
    return (
        <div className='card product'>

            <Link to={`product/${id}`}>
                <img className='product-img medium' src={image} alt='product' />
            </Link>

            <div className='card-body'>
            <Link to={`product/${id}`}>
                <h2>{ name }</h2>
            </Link>

            <Rating rating={rating} reviews={reviews} />
                
            <div className='price'>
                {`$${price}`}
            </div>
            </div>  

        </div>
    )
}

export default Product;

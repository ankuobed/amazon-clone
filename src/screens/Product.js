import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating/Rating';
import data from '../data'

function Product({ match }) {
    const product = data.products.find(product => product.id === parseInt(match.params.id));
    if(!product) return <div>Product Not Found</div>;
    return (
        <div className='row top'>
             <Link to='/'>Back to results</Link>
            <div className='col-2'>
                <img className='large' src={product.image} alt={product.name} />
            </div>

            <div className='col-1'>
                <ul>
                    <li>
                        <h1>{ product.name }</h1>
                    </li>
                    <li>
                        <Rating 
                            rating={product.rating} 
                            reviews={product.reviews} 
                        />
                    </li>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Description:
                        <p>{ product.description }</p>
                    </li>
                </ul>
            </div>

            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li className='row'>
                                <div>Price</div>
                                <div>${ product.price }</div>
                        </li>
                        <li className='row'>
                            <div>Status</div>
                            <div>
                                {
                                    product.countInStock > 0? <span className='success'>In Stock</span> :
                                    <span className='error'>Unavailable</span>
                                }
                            </div>
                        </li>
                        <li>
                            <button className='primary block'>Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/product';
import Loading from '../components/Loading';
import Message from '../components/Message';

function Product({ match, history }) {
    const id = match.params.id;
    const [qty, setQty] = useState(1)
    const { product, loading, error } = useSelector(state => state.productDetails);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        history.push(`/cart/${id}?qty=${qty}`)
    }

    return loading ? <Loading /> :
        error ? <Message variant='danger'>{error}</Message> :
            (<div className='row top'>
                <Link to='/'>Back to results</Link>
                <div className='col-2'>
                    <img className='large padding' src={`.${product.image}`} alt={product.name} />
                </div>

                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
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
                            Description: <span className='small'>{product.description}</span>
                        </li>
                    </ul>
                </div>

                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li className='row'>
                                <div>Price</div>
                                <div>${product.price}</div>
                            </li>
                            <li className='row'>
                                <div>Status</div>
                                <div>
                                    {
                                        product.countInStock > 0 ? <span className='success'>In Stock</span> :
                                            <span className='danger'>Unavailable</span>
                                    }
                                </div>
                            </li>
                            {
                                product.countInStock > 0 && (
                                    <>
                                        <li className='row'>
                                            <div>Qty</div>
                                            <div>
                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x} value={x + 1}>{x + 1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={handleAddToCart} className='primary block'>Add To Cart</button>
                                        </li>
                                    </>
                                )

                            }

                        </ul>
                    </div>
                </div>
            </div>
            )
}

export default Product;
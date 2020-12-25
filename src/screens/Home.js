import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from '../components/Product/Product';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { getProducts } from '../actions/product';

function Home() {
  const { loading, error, products } = useSelector(state => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (loading ?
    <Loading />
    : error ?
      <Message variant='danger'>{error}</Message>
      : <div className='row center'>
        {products.map((product) => <Product key={product.id} {...product} />)}
      </div>
  )
}

export default Home;

import React from 'react';
import data from '../data';
import Product from '../components/Product/Product';

function Home() {
  return (
    <div className='row center'>
        {
        data.products.map((product) => {
            return <Product key={product.id} {...product}/>
        })
        }
    </div>
  );
}

export default Home;
 
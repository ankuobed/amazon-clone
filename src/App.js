import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='brand' to='/'>amazona</Link>
          </div>
          <div className='row nav'>
            <Link to='/cart'>Cart</Link>
            <Link to='/signin'>Sign In</Link>
          </div>
        </header>

        <main>
          <Route path='/cart/:id' component={Cart} />
          <Route path='/product/:id' component={Product} />
          <Route path='/' exact component={Home} />
        </main>

        <footer className='row center'>All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

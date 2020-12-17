import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import Product from './screens/Product';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
              <Link className='brand' to='/'>amazona</Link>
          </div>
          <div>
              <a href='/cart'>Cart</a>
              <a href='/signin'>Sign In</a>
          </div>
        </header>

        <main>
          <Route path='/product/:id' component={Product} />
          <Route path='/' exact component={Home} />
        </main>

        <footer className='row center'>All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
 
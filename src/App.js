import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>

      <Route exact path="/" component={HomePage} /> 
      <Route exact path="/shop" component={ShopPage} />
    </Router>
  );
}

export default App;

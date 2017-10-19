import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Shop';
import Details from './Details';
import Cart from './Cart';
import { Switch, Link, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Store</h1>
        </header>
        <div className="navStrip">
          <Link to="/shop"><div>SHOP</div></Link>
          <Link to="/cart"><div>CART</div></Link>
        </div>

        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/details/:productid" component={Details} /> 
          <Route path="/cart" component={Cart} /> 
        </Switch>

      </div>
    )
  }
}

export default App;
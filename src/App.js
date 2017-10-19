import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Shop';
import Details from './Details';
import Cart from './Cart';
import { connect } from 'react-redux';
import { Switch, Link, Route, withRouter } from 'react-router-dom';


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
          <Link to="/cart"><div>CART: ({this.props.cart.length} items)</div></Link>
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

function mapStateToProps(state) {
  return {cart: state.cart};
}

export default withRouter(connect(mapStateToProps)(App));
// I used Redux connect in this component just to show the number of items in the cart.
// However, this App component is not a route component (i.e., not rendered with <Route />), 
// so when we use connect, the view doesn't update correctly when we go to other routes.
// We fix this by simply importing withRouter and invoking it here.
// Alternatively, we could choose to not use connect in non-route components like App.
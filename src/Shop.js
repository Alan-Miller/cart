import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsOnRedux } from './redux/reducer'; // 1: import action creator from file
import { Link } from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/products')
    .then(products => {
      this.props.setProductsOnRedux(products.data); // 3: call action creator passed down on props
    });
  }

  render() {
    return (
      <div className="Shop">

        <div className="products">
          {this.props.products.map((product, i) => {
            // map through products here to display all
            return (
              <div key={i} className="product">
              
                <Link to={`/details/${product.id}`} >
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                  <p className="id">product ID: {product.id}</p>
                </Link>

              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  // Here, "state.products" is the value we want passed down.
  // "products" is what we are naming the property on this.props
  // In other words, we are saying "this.props.products" should equal "state.products".
  return {products: state.products}; 
}

// Here, the second setProductsOnRedux is the action creator we want connected and passed down.
// The first setProductsOnRedux is what we are naming the property on this.props
// In other words, we are saying this.props.setProductsOnRedux should equal setProductsOnRedux.
const mapDispatchToProps = {setProductsOnRedux: setProductsOnRedux} 


// mapStateToProps: A function that looks at Redux state and tells Redux (returns) the values this components needs. These values are passed down on props.

// mapDispatchToProps: An object with one or more functions stored in it. These functions are the action creators made in the reducer.js file, but the are not connected to or known by Redux until we pass them into this connect function here. Redux then passes them down on props so we can use the connected version of the function. When we do, the action object made by the action creator function passes through the reducer function and changes are made to the Redux state. These changes are then passed down to every component that "subscribes" to those state changes through mapStateToProps (for example, this component subscribes to any changes to state.products).

export default connect(mapStateToProps, mapDispatchToProps)(App); // 2: pass action creator into connect's second argument, known as mapDispatchToProps
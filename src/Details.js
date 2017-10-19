import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setOneProductOnRedux, addProductToCart } from './redux/reducer';

class Details extends Component {

  componentWillMount() {
    const productID = this.props.match.params.productid; 
    // this.props.match stores params
    // the variable productid was declared in Route path in App.js
    // the action value stored on productid is assigned in Link in Shop.js when you click

    axios.get(`https://practiceapi.devmountain.com/products/${productID}`)
    .then(product => {
      this.props.setOneProductOnRedux(product.data);
    });
  }

  addToCart(product) {
    this.props.addProductToCart(product);
  }

  render() {
    const product = this.props.product;

    return (
      <div className="product"> 
        <img alt="product image" src={product.image} />
        <p>{product.title}</p>
        <p>"{product.desc}"</p>
        <p>${product.price}</p>
        <div className="addToCart" onClick={() => this.addToCart(product)}>Add to cart</div>
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {product: state.product};
}
const mapDispatchToProps = {
  setOneProductOnRedux: setOneProductOnRedux,
  addProductToCart: addProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
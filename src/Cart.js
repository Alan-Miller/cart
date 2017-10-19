import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {

  render() {
    const cart = this.props.cart;

    return (
      <div className="cart">
        {cart.map((item, i) => {
          return (
            <div className="itemInCart" key={i}> 
              <img alt={`${item.title} image`} src={item.image} />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          )
        })}
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);
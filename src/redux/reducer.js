// initialState
const initialState = {
  products: [],
  product: {},
  cart: []
}

// action constants
const SET_PRODUCTS_ON_REDUX = 'SET_PRODUCTS_ON_REDUX';
const SET_ONE_PRODUCT_ON_REDUX = 'SET_ONE_PRODUCT_ON_REDUX';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

// action creators
export function setProductsOnRedux(val) {
  return {
    type: SET_PRODUCTS_ON_REDUX,
    payload: val
  }
}

export function setOneProductOnRedux(val) {
  return {
    type: SET_ONE_PRODUCT_ON_REDUX,
    payload: val
  }
}

export function addProductToCart(val) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: val
  }
}

// reducer
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_PRODUCTS_ON_REDUX:
      return Object.assign({}, state, {products: action.payload});
    case SET_ONE_PRODUCT_ON_REDUX:
      return Object.assign({}, state, {product: action.payload});
    case ADD_PRODUCT_TO_CART:
      const newCart = state.cart.slice();
      newCart.push(action.payload);
      return Object.assign({}, state, {cart: newCart});

    default:
      return state;
  }
}
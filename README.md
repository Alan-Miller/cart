Here is a simple repo that is meant to be easy to follow. It has some notes about Redux in the comments. 

If you click the Shop button, the Shop component does an axios request to a simple products API to get an array of product objects and stores the response data in Redux under the ‘products’ property. Since the Shop component subscribes to this Redux property in its mapStateToProps function, it can display the data on the page. 

If you click a specific product, it uses that product’s ID to route to the Details component, then it pulls that ID off this.props.match.params and makes another axios request with the ID to get just one product. That product is stored on Redux under the ‘product’ property. The Details component subscribes to that property’s value using mapStateToProps, so it is able to render that product’s data on the page. 

If you click Add To Cart, that product is sent to Redux and pushed onto the Redux cart property inside the reducer function, then the Redux ‘cart’ property is set to that new (longer) array of products. Clicking Add To Cart does not route you anywhere, but if you then click the Cart button, that component subscribes to the Redux cart property and is able to render all products in the cart.

The App header subscribes to the cart on Redux so it can display the number of items in the cart (i.e., the cart array’s length). This is an example of accessing Redux data in different components, since the cart data is used both in the Cart component to display the items in the cart and in the App component to display the number of items. 

NOTE: withRouter is imported into the App component and called at the bottom. This merely fixes an issue where non-route components (like App in this case) using Redux connect do not properly rerender when trying to click to other routes. The alternative is to not use Redux connect in non-route components.
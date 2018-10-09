import React, { Component } from 'react';

class Total extends Component {

  totalFinder = () => {
    let result = 0
    for (var i = 0; i < this.props.cart.length; i++) {
      result += this.props.cart[i].product.priceInCents * this.props.cart[i].quantity
    }
    result = '$' + (result/100).toFixed(2)
    return result
  }

  render() {
    return (
      <div className="container">Current Total: {this.totalFinder()}</div> 
    );
  }
}




export default Total;
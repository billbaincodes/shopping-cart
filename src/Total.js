import React, { Component } from 'react'

class Total extends Component {

  totalFinder = () => {
    let result = 0
    this.props.cart.map(cartItem => {return result += cartItem.product.priceInCents * cartItem.quantity})
    return result = `$${(result/100).toFixed(2)}`
  }

  render() {
    return (
      <div className="container">Current Total: {this.totalFinder()}</div> 
    );
  }
}

export default Total
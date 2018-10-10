import React, { Component } from 'react'

class Total extends Component {

  totalFinder = () => {
    let sum = this.props.cart.reduce((result, cartItem) => {return result += cartItem.product.priceInCents * cartItem.quantity}, 0)
    return `$${(sum/100).toFixed(2)}`
  }

  render() {
    return (
      <div className="container">Current Total: {this.totalFinder()}</div> 
    )
  }
}

export default Total
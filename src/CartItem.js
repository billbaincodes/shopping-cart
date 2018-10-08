import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <div class="collection-item">
        <div class="row">
          <div class="col-md-8">{this.props.item.product.name}</div>
          <div class="col-md-2">{this.props.item.product.priceInCents}</div>
          <div class="col-md-2">{this.props.item.quantity}</div>
        </div>
      </div>
    );
  }
}




export default CartItem;
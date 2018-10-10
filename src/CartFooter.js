import React, { Component } from 'react';

class CartFooter extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <p className="navbar-brand">{this.props.copySymbol}{this.props.copyYear}</p>
      </nav>
    );
  }
}

export default CartFooter;
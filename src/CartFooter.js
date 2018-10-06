import React, { Component } from 'react';

class CartFooter extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{this.props.copySymbol}{this.props.copyYear}</a>
      </nav>
    );
  }
}




export default CartFooter;
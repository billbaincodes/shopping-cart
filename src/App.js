import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader.js'

class CartHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Shopping Cart</a>
      </nav>
    );
  }
}




export default CartHeader;


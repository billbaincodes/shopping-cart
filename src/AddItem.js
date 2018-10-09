import React, { Component } from 'react';

class AddItem extends Component {

  renderOptions = () => {
    return this.props.products.map((product) => {
      return <option key={product.id} data-price={product.priceInCents}> {product.name} </option>
    })
  }
  
  itemConstructor = () => {
    let productAttributes = this.props.products.filter(product => product.name === this.refs.dropDown.value)
    let newItem = {
      product: {
        id: productAttributes[0].id,
        name: productAttributes[0].name,
        priceInCents: productAttributes[0].priceInCents,
      },
    quantity: this.refs.quantity.value
    }
    this.props.formSubmitted(newItem)
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <form>
          Quantity:<br></br>
          <input ref="quantity" type="text" name="quantity"></input>
          <br></br>
          Products:
          <br></br>
          <select ref="dropDown">
            {this.renderOptions()}
          </select>
        </form> 
        <br></br>
        <button onClick={this.itemConstructor}>Submit</button>
      </div>
    );
  }
}

export default AddItem;
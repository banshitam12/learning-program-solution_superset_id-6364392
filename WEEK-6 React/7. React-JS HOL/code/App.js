// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// Cart class component with itemname and price properties
class Cart extends React.Component {
  constructor(props) {
    super(props);
    // Create 2 properties as mentioned in instructions
    this.itemname = props.itemname;
    this.price = props.price;
  }

  render() {
    return (
      <div className="cart-item">
        <h3>{this.itemname}</h3>
        <p>Price: ${this.price}</p>
      </div>
    );
  }
}

// OnlineShopping class component
class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    
    // Create an array of Cart and initialize 5 items
    this.cartArray = [
      new Cart({ itemname: "Laptop", price: 999.99 }),
      new Cart({ itemname: "Smartphone", price: 699.99 }),
      new Cart({ itemname: "Headphones", price: 199.99 }),
      new Cart({ itemname: "Tablet", price: 399.99 }),
      new Cart({ itemname: "Smart Watch", price: 299.99 })
    ];
  }

  render() {
    return (
      <div className="online-shopping">
        <h1>Online Shopping</h1>
        <div className="items-container">
          {/* Loop through these items and display the data */}
          {this.cartArray.map((cartItem, index) => (
            <Cart 
              key={index}
              itemname={cartItem.itemname}
              price={cartItem.price}
            />
          ))}
        </div>
        <div className="total">
          <h2>
            Total: ${this.cartArray.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </h2>
        </div>
      </div>
    );
  }
}

// Apply reactDOM.render() as specified in instructions
ReactDOM.render(<OnlineShopping />, document.getElementById('root'));

export default OnlineShopping;

import React from 'react';
import ReactDOM from 'react-dom/client';

// Cart class with 2 properties: itemname and price
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.itemname = props.itemname;
    this.price = props.price;
  }

  render() {
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3>{this.itemname}</h3>
        <p>Price: ${this.price}</p>
      </div>
    );
  }
}

// OnlineShopping class with array of Cart items
class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    
    // Array of Cart with 5 items
    this.cartItems = [
      { itemname: "Laptop", price: 999.99 },
      { itemname: "Smartphone", price: 699.99 },
      { itemname: "Headphones", price: 199.99 },
      { itemname: "Tablet", price: 399.99 },
      { itemname: "Smart Watch", price: 299.99 }
    ];
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Online Shopping</h1>
        {/* Loop through items and display */}
        {this.cartItems.map((item, index) => (
          <Cart 
            key={index}
            itemname={item.itemname}
            price={item.price}
          />
        ))}
        <div style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '15px',
          textAlign: 'center',
          borderRadius: '5px',
          marginTop: '20px'
        }}>
          <h2>
            Total: ${this.cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </h2>
        </div>
      </div>
    );
  }
}

// Use reactDOM.render() as instructed - but with React 18 syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OnlineShopping />);
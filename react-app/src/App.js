import React, { Component } from 'react';
import logo from './logo.svg';
import Product from "./product/product-component";
import './App.css';

class App extends Component {
  products = [{'id':1,'name':'Football', 'stock': true, 'cost':500, 'imgsrc': 'https://blog.partypieces.co.uk/wp-content/uploads/2010/02/football.png'},
  {'id':2,'name':'Cricket Ball', 'stock': false, 'cost':100, 'imgsrc': 'https://cdn.shopify.com/s/files/1/1126/9634/products/Velocity_red_large.jpg?v=1464761205'}]
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Product data={this.products[0]} />
          <Product data={this.products[1]} />
        </div>
      </div>
    );
  }
}

export default App;

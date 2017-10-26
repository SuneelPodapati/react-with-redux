import React, { Component } from 'react';
import logo from './logo.svg';
import Product from "./product/product-component";
import './App.css';

class App extends Component {
  products = [{'id':1,'name':'Football', 'stock': true, 'cost':500, 'imgsrc': 'https://blog.partypieces.co.uk/wp-content/uploads/2010/02/football.png'},
  {'id':2,'name':'Cricket Ball', 'stock': false, 'cost':100, 'imgsrc': 'https://cdn.shopify.com/s/files/1/1126/9634/products/Velocity_red_large.jpg?v=1464761205'},
  {'id':3,'name':'Volley Ball', 'stock': true, 'cost':200, 'imgsrc': 'https://4.imimg.com/data4/MK/AW/MY-17083987/h-250x250.jpg'},
  {'id':4,'name':'Rugby Ball', 'stock': true, 'cost':300, 'imgsrc': 'https://images-na.ssl-images-amazon.com/images/I/91ovhs8L50L._SL1500_.jpg'},
  {'id':5,'name':'Badminton Shuttle', 'stock': false, 'cost':100, 'imgsrc': 'http://i.ebayimg.com/images/g/utEAAOSwA3dYNRAe/s-l500.jpg'}]
  render() {
    let products = this.products.map((p) => <Product data={p}/>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {products}
        </div>
      </div>
    );
  }
}

export default App;

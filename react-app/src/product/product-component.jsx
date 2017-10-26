import React, { Component } from "react";
import AddToCart from './addtocart-component';

class Product extends Component{
render() {
    let product = this.props.data;
    return (
        <div>
            <img src={product.imgsrc} height="200px" width="200px" />
            <h3>{product.name}</h3>
            <h5>$ {product.cost}</h5>
            <AddToCart stock={product.stock} />
        </div>
    );
}
}

export default Product;
import React, { Component } from "react";
import AddToCart from './addtocart-component';

class Product extends Component{
render() {
    let code = this.props.code;
    let product = this.props.data;
    return (
        <div>
            <img alt={product.name} src={product.imgsrc} height="200px" width="200px" />
            <h3>{product.name}</h3>
            <h5>{code == 'INR'? '₹' : '$'} {code =='INR'? product.cost: (product.cost/67).toFixed(2)}</h5>
            <AddToCart stock={product.stock} />
        </div>
    );
}
}

export default Product;
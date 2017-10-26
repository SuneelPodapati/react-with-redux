import React, {Component} from 'react';

class AddToCart extends Component{



    render(){
        return (
            this.props.stock? <button>Add to cart</button> : <p>Out of Stock</p>
        );
    }
}

export default AddToCart;
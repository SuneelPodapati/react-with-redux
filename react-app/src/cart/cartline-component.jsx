import React, {Component} from 'react';

export default class CartLine extends Component{

    constructor(props){
        super(props);
        this.state = {qty: 1};
    }

    qtyChange = (e) => {
        this.setState({qty:e.target.value});
        this.props.totalchanged({'cost': this.props.data.cost,'old': this.state.qty, 'new': e.target.value});
    }

    render(){
        let product = this.props.data;
        let code = this.props.code;
        return (
            <tr className="App-center">
                <td width = "300px">{product.name}</td>
                <td width = "100px">{code == 'INR'? '₹' : '$'} {code =='INR'? product.cost: (product.cost/67).toFixed(2)}</td>
                <td width = "100px"><input type = "number" min="1" onChange={this.qtyChange} /></td>
                <td width = "200px">{code == 'INR'? '₹' : '$'} {code =='INR'? (product.cost * this.state.qty): ((product.cost * this.state.qty)/67).toFixed(2)}</td>
            </tr>
        );
    }
}
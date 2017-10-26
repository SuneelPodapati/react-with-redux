import React, {Component} from 'react';
import CartLine from './cartline-component';

export default class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {total: 0};
    }

    onTotalChanged = (e) => {
        console.log(e);
        let previous = this.state.total;
        this.setState({'total': previous - (e.cost*e.old) + (e.cost*e.new)})
    }

    render(){
        let rows = this.props.cartItems.map((p) => 
                                                 <CartLine data={p} 
                                                 totalchanged={this.onTotalChanged} 
                                                 code={this.props.code} 
                                                 key={p.id}/>);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Cost</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                        <tbody>
                        {rows}
                        <tr className="App-center">
                            <td></td>
                            <td></td>
                            <td><b>Total:</b></td>
                            <td><b>{this.state.total}</b></td>
                        </tr>
                        </tbody>
                </table>
            </div>
        );
    }
}
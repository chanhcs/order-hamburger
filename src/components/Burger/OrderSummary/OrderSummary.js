import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Auxiliary>
                <h3 style={{ textAlign: 'center', color: 'red' }}>Your Order</h3>
                <p style={{ textAlign: 'center' }}>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p style={{ textAlign: 'center' }}><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
                <p style={{ textAlign: 'center' }}>Continue to Checkout?</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </div>



            </ Auxiliary>
        );
    }
}

export default OrderSummary;
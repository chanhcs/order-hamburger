import React, { Component } from 'react';
import AuxReact from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './OrderSumamary.css';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[orderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            })

        return (
            <AuxReact>

                <h3 className={classes.h3}>Your Order</h3>
                <p className={classes.p}>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <strong>Total Price: {this.props.price.toFixed(2)}$</strong>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchseContinue}>CONTINUE</Button>

            </AuxReact >
        );
    }
}





export default OrderSummary;
import React, { Component } from 'react';
import classes from './OrderSummary.css';
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
                <div className={classes.order}>
                    <h3 className={classes.h3}>Your Order</h3>
                    <p className={classes.p}>A delicious burger with the following ingredients:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p className={classes.p}><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
                    <p className={classes.p}>Continue to Checkout?</p>
                    <div className={classes.button} >
                        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                    </div>
                </div>
            </ Auxiliary>
        );
    }
}

export default OrderSummary;
import React from 'react';
import AuxReact from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './OrderSumamary.css';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
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
                <strong>Total Price: {props.price.toFixed(2)}$</strong>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchseContinue}>CONTINUE</Button>
       
        </AuxReact>
    )
};

export default orderSummary;
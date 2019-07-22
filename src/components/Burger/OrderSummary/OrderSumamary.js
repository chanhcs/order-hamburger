import React from 'react';
import AuxReact from '../../../hoc/Auxiliary';
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
            <h3 style={{color: 'red', textAlign: 'center'}}>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </AuxReact>
    )
};

export default orderSummary;
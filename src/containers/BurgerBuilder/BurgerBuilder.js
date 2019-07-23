import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumamary';
const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        purchasable: false,
        purchasing: false,
        totalPrice: 4       
    }

    updatePurchaseState(ingredients) {      
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount =this.state.ingredients[type];   
        const updatedCount = oldCount + 1;  //Dem so luong moi loai khi them vao           
        const updateIngredients = {
            ...this.state.ingredients
        };        
        updateIngredients[type] = updatedCount;     
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];  
        if(oldCount <= 0)
            return; 
        const updatedCount = oldCount - 1;               
        const updateIngredients = {
            ...this.state.ingredients
        };        
        updateIngredients[type] = updatedCount;     
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})    
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

   

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {        
            disabledInfo[key] = disabledInfo[key] <= 0         
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} 
                       modalClosed={this.purchaseCancelHandler}
                      
                        
                >
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchseContinue = {this.purchaseContinueHandler}
                        purchaseCancelled= {this.purchaseCancelHandler}
                        price ={this.state.totalPrice}

                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}     
                    ordered = {this.purchaseHandler}  
                           
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
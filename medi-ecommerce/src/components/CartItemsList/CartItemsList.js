import React, { Component } from 'react';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import './CartItemsList.css';

class CartItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {}
    };
  }
  render() {
    const { productsInCart } = this.props;
    return (
      <div>
        {this.props.productsInCart.length > 0 ? (
          <div className="image">
            <img src={MealPlanImage} />
            <h3>{productsInCart[0].name}</h3>
            <p>${productsInCart[0].cost}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CartItemList;

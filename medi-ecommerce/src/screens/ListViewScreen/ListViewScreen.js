import React, { Component } from 'react';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import styles from '../../modules/styles';
import './ListViewScreen.css'

class ListViewScreen extends Component {
  render() {
    return (
      <div style={styles.listViewScreen.container}>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart">Add to Cart</a>
        </div>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart">Add to Cart</a>
        </div>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart">Add to Cart</a>
        </div>
      </div>
    );
  }
}

export default ListViewScreen;

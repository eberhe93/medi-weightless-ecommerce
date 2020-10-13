import React, { Component } from 'react';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import styles from '../../modules/styles';
import './ListViewScreen.css'
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/addAction';

class ListViewScreen extends Component {
    constructor(props){
        super(props)
    }
  render() {
      console.log(this.props)
    return (
      <div style={styles.listViewScreen.container}>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart" onClick={this.props.addToBasket}>Add to Cart</a>
        </div>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart" onClick={this.props.addToBasket}>Add to Cart</a>
        </div>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart" onClick={this.props.addToBasket}>Add to Cart</a>
        </div>
      </div>
    );
  }
}

export default connect(null, {addToBasket})(ListViewScreen);

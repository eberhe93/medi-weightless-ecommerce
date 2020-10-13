import React, { Component } from 'react';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import styles from '../../modules/styles';
import './ListViewScreen.css'
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/addAction';
import { Api } from '../../modules/api';

class ListViewScreen extends Component {
    constructor(props){
        super(props)
    }

getProductList = () => {
  fetch(Api.getProductList()).then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
}

  render() {
      console.log(this.props)
      this.getProductList()
    return (
      <div style={styles.listViewScreen.container}>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart" onClick={() => this.props.addToBasket('item1')}>Add to Cart</a>
        </div>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart" onClick={() => this.props.addToBasket('item2')}>Add to Cart</a>
        </div>
        <div className="image">
          <img src={MealPlanImage} alt="" />
          <h3>Item Name</h3>
          <h3>$15</h3>
          <a href="#" className="addToCartButton cart" onClick={() => this.props.addToBasket('item3')}>Add to Cart</a>
        </div>
      </div>
    );
  }
}

export default connect(null, {addToBasket})(ListViewScreen);

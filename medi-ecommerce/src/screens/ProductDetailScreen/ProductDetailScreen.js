import React, { Component } from 'react';
import { Api } from '../../modules/api';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import { addToBasket } from '../../actions/addAction';
import { connect } from 'react-redux';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import './ProductDetailScreen.css';

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getProductDetail();
  }

  getProductDetail = () => {
    Api.getProductDetail(this.props.match.params.productId)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ product: data.product_details[0].product });
      });
  };

  renderItems() {
    if (this.state.product !== null) {
      let { name, cost, description, inventory_on_hand } = this.state.product;
      return (
        <div className="details">
          <img src={MealPlanImage} alt="" />
          <div className="box">
            <div className="row">
              <h2>{name}</h2>
              <span>${cost}</span>
            </div>
            <p>{description}</p>
            <h5>Quantity remaining: {inventory_on_hand}</h5>
            {this.state.product.inventory_on_hand > 0 ? (
              <Link to="/checkout" className="checkout-button">
                <button
                  className="checkout-button"
                  onClick={() => this.props.addToBasket(this.state.product)}
                >
                  BUY IT NOW
                </button>
              </Link>
            ) : (
              <div className="unavailable-button">
                <h2>UNAVAILABLE</h2>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}
export default connect(null, { addToBasket })(ProductDetailScreen);

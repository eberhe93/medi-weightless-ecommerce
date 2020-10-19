import React, { Component } from 'react';
import './ListViewScreen.css';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/addAction';
import { populateDataEndpoint } from '../../actions/getAction';
import { Api } from '../../modules/api';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

class ListViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.props.populateDataEndpoint();
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  }

  getProducts() {
    fetch(
      Api.getProductList()
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ products: data.data });
        })
    ).catch(err => {
      console.log('Error Reading data ' + err);
    });
  }

  planService(product) {
    return product.split(' ')[0];
  }

  renderItems() {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <div className="loading-bar">
          <div className="inner-loading-bar">
            <CircularProgress size={30} />
          </div>
        </div>
      );
    } else {
      return products.map((product, i) => (
        <div className="card" key={i}>
          <Link to={`/detail/${product.code}`}>
            <img src={MealPlanImage} alt="" />
          </Link>
          <div className="content">
            <h3>
              <Link to={`/detail/${product.code}`}>{product.name}</Link>
            </h3>
            <span>${product.cost}</span>
            <p>Category: {this.planService(product.name)}</p>
            {product.inventory_on_hand > 0 ? (
              <Link to="/checkout" className="checkout-button">
                <button
                  className="checkout-button"
                  onClick={() => this.props.addToBasket(product)}
                >
                  BUY IT NOW
                </button>
              </Link>
            ) : (
              <div className="unavailable-button">
                <h2>UNAVAILABLE</h2>
              </div>
            )}

            <h5>Remaining: {product.inventory_on_hand}</h5>
          </div>
        </div>
      ));
    }
  }

  render() {
    return <div id="product">{this.renderItems()}</div>;
  }
}

export default connect(null, { addToBasket, populateDataEndpoint })(
  ListViewScreen
);

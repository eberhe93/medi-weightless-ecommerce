import React, { Component } from 'react';
import { Api } from '../../modules/api';
import { Redirect } from 'react-router';
import { ImMinus, ImPlus } from 'react-icons/im';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import MealPlanImage from '../../assets/meal-plan-template.jpg';
import { resetCartNumber, increaseQuantity } from '../../actions/addAction';
import { decreaseQuantity } from '../../actions/subtractAction';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CartCheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      shippingAddress: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
      },
      billingAddress: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
      },
      cart: [],
      isLoading: false,
      redirect: false,
      toastMessage: '',
    };

    this.submitPurchase = this.submitPurchase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBillingAddress = this.handleBillingAddress.bind(this);
    this.handleShippingAddress = this.handleShippingAddress.bind(this);
  }

  componentDidMount() {
    this.setState({ cart: this.props.cartProps.products });
  }
  componentWillMount() {
    this.resetForm();
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBillingAddress(e) {
    const { billingAddress } = { ...this.state };
    const currentState = billingAddress;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ billingAddress: currentState });
  }

  checkValid() {
    const {
      name,
      email,
      phoneNumber,
      billingAddress,
      shippingAddress
    } = this.state;

    let isValid = true;

    if (name === '' || email === '' || phoneNumber === '') {
      isValid = false;
    }

    for (let field in billingAddress) {
      if (billingAddress[field] === '') {
        isValid = false;
      }
    }

    for (let field in shippingAddress) {
      if (shippingAddress[field] === '') {
        isValid = false;
      }
    }

    return isValid;
  }

  handleShippingAddress(e) {
    const { shippingAddress } = { ...this.state };
    const currentState = shippingAddress;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ shippingAddress: currentState });
  }

  submitPurchase() {
    this.setState({ isLoading: true });
    let total =
      this.props.cartProps.cartNumber *
      this.props.cartProps.selectedProduct.cost;
    const { code } = this.props.cartProps.selectedProduct;
    const {
      name,
      email,
      phoneNumber,
      shippingAddress,
      billingAddress
    } = this.state;

    let orderObj = {
      customer_name: name,
      customer_email: email,
      customer_phone: phoneNumber,
      shipping_address: shippingAddress,
      billing_address: billingAddress,
      purchase_products: [
        {
          code: code,
          quantity: this.props.cartProps.cartNumber
        }
      ],
      order_total: total
    };

    setTimeout(() => {
      Api.submitPurchase(code, orderObj).then(res => {
        if (res.status === 200) {
          res.json().then(data => this.toastMessageHandler('success'));
        } else {
          res
            .json()
            .then(json => {
              // handle response
              console.log(json);
              this.toastMessageHandler('error');
            })
            .catch(ex => {
              console.log(res.status);
              this.toastMessageHandler('error');
            });
        }
      });
    }, 2000);
  }

  toastMessageHandler(msg){
    this.setState({ isLoading: false,toastMessage: msg})
        setTimeout(() => {
      this.props.resetCartNumber();
      this.setState({ redirect: true });
    }, 5000);

  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      shippingAddress: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
      },
      billingAddress: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
      },
      cart: [],
      isLoading: false,
      redirect: false,
      toastMessage: ''
    });
  }

  renderItems() {
    const {cart} = this.state;
    return cart && cart.length > 0 ? (
      cart.map((product, i) => (
        <Card className="root" key={i}>
          <CardActionArea>
            <img src={MealPlanImage} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name.split(' ')[0]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Remaing Quantity:</strong> {product.inventory_on_hand}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => this.props.decreaseQuantity(product)}
            >
              <ImMinus />
            </Button>
            <Button size="small" color="primary">
              {this.props.cartProps.cartNumber}
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => this.props.increaseQuantity(product)}
            >
              <ImPlus />
            </Button>
          </CardActions>
        </Card>
      ))
    ) : (
      <div> There are currently no items in your cart.</div>
    );
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    const total =
      this.props.cartProps.cartNumber *
      this.props.cartProps.selectedProduct.cost;
    const notEmptyCart = this.props.cartProps.cartNumber > 0;
    return (
      <div className="checkout-parent-div">
        <div className="purchased-item-div">
          <div
            className={
              notEmptyCart ? 'purchased-items-list' : 'no-items-message'
            }
          >
            {this.renderItems()}
          </div>
        </div>
        {notEmptyCart ? (
          <div>
            <div className="inner-purchased-div">
              <h2 style={{ textAlign: 'center' }}>Total Amount: ${total} </h2>
            </div>
            <div className="checkout-form">
              <CheckoutForm
                values={this.state}
                contactValuesHandler={this.handleInputChange}
                billingValuesHandler={this.handleBillingAddress}
                shippingValuesHandler={this.handleShippingAddress}
              />
              <div style={{ width: '5%', margin: '0 auto' }}>
                <Button
                  disabled={!this.checkValid()}
                  onClick={this.submitPurchase}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps, {
  resetCartNumber,
  increaseQuantity,
  decreaseQuantity
})(CartCheckoutPage);

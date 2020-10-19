import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import MediLogo from '../../assets/medi-logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import './Navbar.css';

const Navbar = props => (
  <div>
    <header>
      <div className="navbar-overlay"></div>
      <nav>
        <div>
          <img src={MediLogo} className="checkout-image-logo" />
        </div>
        <ul>
          <li className="cart">
            <Link to="/checkout" className="nav-cart-button">
              <TiShoppingCart />
              <span> {props.cartProps.cartNumber} </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <BackButton cartCount={props.cartProps.cartNumber} />
  </div>
);

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps, {})(Navbar);

import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import styles from '../../modules/styles';
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';

const Navbar = props => (
  <header>
    <div style={styles.navBar.navOverlay}></div>
    <nav>
      <h2>Medi Weightloss</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li className="cart">
          <a href="#" style={styles.navBar.navCartButton}>
            <TiShoppingCart />
            Cart <span> {props.cartProps.cartNumber} </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);


const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, {getNumbers})(Navbar);

import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import styles from '../../modules/styles';
import { connect } from 'react-redux';
import { getNumbers, getProductList } from '../../actions/getAction';
import { Link } from 'react-router-dom';

const Navbar = props => {
  console.log(props)
  return(
  <header>
    <div style={styles.navBar.navOverlay}></div>
    <nav>
      <h2>Medi Weightloss</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
        <li className="cart">
          <Link to="/checkout" style={styles.navBar.navCartButton}>
            <TiShoppingCart />
            Cart <span> {props.cartProps.cartNumber} </span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>)
};


const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, {getNumbers})(Navbar);

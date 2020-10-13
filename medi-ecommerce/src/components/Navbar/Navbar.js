import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import styles from '../../modules/styles';

const Navbar = () => (
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
            Cart <span> 0</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

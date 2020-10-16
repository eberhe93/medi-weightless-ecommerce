import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { resetCartNumber } from '../../actions/addAction';
import { connect } from 'react-redux';
import './BackButton.css';

const BackButton = props => {
  let history = useHistory();
  let location = useLocation();

  function resetProduct() {
    props.resetCartNumber();
    history.push('/');
  }
  if (location.pathname === '/checkout') {
    return (
      <header className="checkout-back-button-header">
        <div onClick={() => resetProduct()}>
          <MdKeyboardBackspace size={28} color={'#1FAFA5'} />
          <div className="checkout-back-button-text-div">
            <h3>
              Warning: Pressing the back button will reset your cart.
            </h3>
          </div>
        </div>
      </header>
    );
  }
  if (location.pathname !== '/') {
    return (
      <header className="back-button-header">
        <div onClick={() => history.goBack()}>
          <MdKeyboardBackspace size={28} color={'#1FAFA5'} />
        </div>
      </header>
    );
  }
  return null;
};

export default connect(null, { resetCartNumber })(BackButton);

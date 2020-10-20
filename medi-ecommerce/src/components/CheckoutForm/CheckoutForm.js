import React from 'react';
import { TextField, LinearProgress } from '@material-ui/core/';
import './CheckoutForm.css';
import ToastMessage from '../ToastMessage/ToastMessage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CheckoutForm = props => {
  const {
    contactValuesHandler,
    billingValuesHandler,
    shippingValuesHandler,
    phoneNumberHandler,
    values
  } = props;
  return (
    <div>
      <div className="checkout-parent-div">
        <div className="checkout-container">
          <div className="form-container">
            <div className="email-field-style">
              <TextField
                id="standard-basic"
                label="Name *"
                name="name"
                value={values.name}
                onChange={e => contactValuesHandler(e)}
              />
              <div style={{margin:'0 auto'}}>
                <TextField
                  id="standard-basic"
                  label="Email *"
                  name="email"
                  value={values.email}
                  onChange={e => contactValuesHandler(e)}
                />
                {!values.isValidEmail ? <ErrorMessage /> : null}
              </div>
              <TextField
                id="standard-basic"
                label="Phone Number *"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={e => phoneNumberHandler(e)}
                inputProps={{ maxLength: 10 }}
              />{' '}
            </div>
            Billing Address *
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Street"
              name="street"
              value={values.billingAddress.street}
              onChange={e => billingValuesHandler(e)}
            />
            <div className="address-form">
              <TextField
                id="standard-basic"
                label="City"
                name="city"
                value={values.billingAddress.city}
                onChange={e => billingValuesHandler(e)}
              />
              <TextField
                id="standard-basic"
                label="State"
                name="state"
                value={values.billingAddress.state}
                onChange={e => billingValuesHandler(e)}
              />
              <TextField
                id="standard-basic"
                label="Zipcode"
                name="zipcode"
                value={values.billingAddress.zipcode}
                inputProps={{ maxLength: 6 }}
                onChange={e => billingValuesHandler(e)}
              />
            </div>
            <div className="field-style">
              Shipping Address *
              <TextField
                fullWidth={true}
                id="standard-basic"
                label="Street"
                name="street"
                value={values.shippingAddress.street}
                onChange={e => shippingValuesHandler(e)}
              />
              <div className="address-form">
                <TextField
                  id="standard-basic"
                  label="City"
                  name="city"
                  value={values.shippingAddress.name}
                  onChange={e => shippingValuesHandler(e)}
                />
                <TextField
                  id="standard-basic"
                  label="State"
                  name="state"
                  value={values.shippingAddress.state}
                  onChange={e => shippingValuesHandler(e)}
                />
                <TextField
                  id="standard-basic"
                  label="Zipcode"
                  name="zipcode"
                  value={values.shippingAddress.zipcode}
                  inputProps={{ maxLength: 6 }}
                  onChange={e => shippingValuesHandler(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {values.isLoading ? (
          <div className="progress-bar">
            <LinearProgress />
          </div>
        ) : values.toastMessage !== '' ? (
          <ToastMessage msg={values.toastMessage} />
        ) : null}
      </div>
    </div>
  );
};

export default CheckoutForm;

import {
  GET_NUMBERS_IN_BASKET,
  FETCH_PRODUCT_SUCCESS,
  POPULATE_DATA
} from './types';
import { Api } from '../modules/api';

export function populateDataEndpoint() {
  return dispatch => {
    dispatch({
      type: POPULATE_DATA
    });
  };
}

export function getProductData() {
  return dispatch => {
    Api.getProductList()
      .then(res => {
        if (res.ok === true) {
          dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: res.json()
          });
          return res.json();
        }
      })
      .catch(error => {
        console.warn(`A problem occurred: ${error.message}`);
      });
  };
}

export function getNumbers() {
  return dispatch => {
    dispatch({
      type: GET_NUMBERS_IN_BASKET
    });
  };
}

import {
  ADD_PRODUCT_TO_BASKET,
  GET_NUMBERS_IN_BASKET,
  GET_PRODUCT_LIST,
  RESET_CART_NUMBER,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  POPULATE_DATA
} from '../actions/types';
import { Api } from '../modules/api';

const initialState = {
  cartNumber: 0,
  products: [],
  CartTotal: 0,
  selectedProduct: [],
  dataIsPopulated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return {
        cartNumber: state.cartNumber + 1,
        products: [...state.products, action.payload],
        selectedProduct: action.payload
      };
    case GET_NUMBERS_IN_BASKET:
      return {
        ...state
      };
    case GET_PRODUCT_LIST:
      return {
        ...state,
        loading: false,
        products: action.payload.products
      };
    case RESET_CART_NUMBER:
      return {
        ...initialState
      };
    case DECREASE_PRODUCT_QUANTITY:
      if (state.cartNumber > 1)
        return {
          ...state,
          cartNumber: state.cartNumber - 1,
          cartTotal: state.cartNumber * action.payload.cost
        };
    case INCREASE_PRODUCT_QUANTITY:
      if (state.cartNumber < action.payload.inventory_on_hand)
        return {
          ...state,
          cartNumber: state.cartNumber + 1,
          cartTotal: state.cartNumber * action.payload.cost
        };
    case POPULATE_DATA:
      if (state.dataIsPopulated === false)
        Api.populateData();
      return {
        ...state,
        dataIsPopulated: true
      };
    default:
      return state;
  }
};

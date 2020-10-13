import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS_IN_BASKET } from '../actions/types';

const initialState = {
    cartNumber: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return {
                cartNumber: state.cartNumber+1
            }
            case GET_NUMBERS_IN_BASKET:
                return {
                    ... state
                }
        default:
            return state;
    }
}
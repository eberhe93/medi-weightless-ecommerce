import { ADD_PRODUCT_TO_BASKET } from './types';

export const addToBasket = () => {
    return (dispatch) => {
        console.log('ADD_PRODUCT_TO_BASKET');
        dispatch({
            type: ADD_PRODUCT_TO_BASKET
        })
    }
}
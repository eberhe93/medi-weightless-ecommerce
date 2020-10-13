import { ADD_PRODUCT_TO_BASKET } from './types';

export const addToBasket = ( productName ) => {
    return (dispatch) => {
        console.log('ADD_PRODUCT_TO_BASKET');
        console.log('Product', productName);
        dispatch({
            type: ADD_PRODUCT_TO_BASKET,
            payload: productName
        })
    }
}
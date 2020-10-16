import { FETCH_PRODUCT_SUCCESS, DECREASE_PRODUCT_QUANTITY } from './types';

export function decreaseQuantity(product) {
    return (dispatch) => {
        dispatch({
            type: DECREASE_PRODUCT_QUANTITY,
            payload: product
        })
    }
}

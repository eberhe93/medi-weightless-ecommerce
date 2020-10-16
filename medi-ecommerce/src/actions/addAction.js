import { ADD_PRODUCT_TO_BASKET, RESET_CART_NUMBER, INCREASE_PRODUCT_QUANTITY } from './types';

export function addToBasket(productName){
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_BASKET,
            payload: productName
        })
    }
}

export function resetCartNumber(){
    return (dispatch) => {
        dispatch({
            type: RESET_CART_NUMBER,
        })
    }
}

export function increaseQuantity(product) {
    return (dispatch) => {
        dispatch({
            type: INCREASE_PRODUCT_QUANTITY,
            payload: product
        })
    }
}

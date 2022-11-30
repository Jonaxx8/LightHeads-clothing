import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    ADD_ITEM: 'ADD_ITEM'
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
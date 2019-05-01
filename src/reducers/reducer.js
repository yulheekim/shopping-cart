
export const ADD_ITEM_CART = 'shopping-cart/ADD_ITEM_CART';
export const TOGGLE_MODAL = 'shopping-cart/TOGGLE_MODAL';

const INITIAL_STATE = {
    modalOpen: false,
    itemsCart: []
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case ADD_ITEM_CART:
            var new_itemsCart = state.itemsCart;
            new_itemsCart.push(action.payload);
            console.log(new_itemsCart)
            return {
                ...state,
                itemsCart: new_itemsCart
            };
        case TOGGLE_MODAL:
            return {
                ...state,
                modalOpen: !state.modalOpen,
            };
        default:
            return {
                ...state
            }
    }
}

//Action Creators
export const add_item_cart = (iid) => {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM_CART,
            payload: iid
        })
    }
}

export const toggle_modal = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
        })
    }
}
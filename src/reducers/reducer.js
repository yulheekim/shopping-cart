
export const ADD_ITEM_CART = 'shopping-cart/ADD_ITEM_CART';
export const DELETE_ITEM_CART = 'shopping-cart/DELETE_ITEM_CART';
export const HANDLE_SIZE_CLICK = 'shopping-cart/HANDLE_SIZE_CLICK'; 
export const TOGGLE_MODAL = 'shopping-cart/TOGGLE_MODAL';

const INITIAL_STATE = {
    modalOpen: false,
    itemsCart: [],
    selectedSize: [],
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case ADD_ITEM_CART:
            var new_itemsCart = state.itemsCart;
            new_itemsCart.push(action.payload);
            return {
                ...state,
                itemsCart: new_itemsCart
            };
        case DELETE_ITEM_CART:
            var new_itemsCart = state.itemsCart;
            new_itemsCart = new_itemsCart.filter(e => e !== action.payload);
            return {
                ...state,
                itemsCart: new_itemsCart
            };
        case HANDLE_SIZE_CLICK:
            var new_selectedSize = state.selectedSize;
            if (!state.selectedSize.some(e => e === action.payload)) {
                return {
                    ...state,
                    selectedSize: [
                        ...state.selectedSize,
                        action.payload
                    ]
                }
            }
            else {
                return {
                    ...state,
                    selectedSize: state.selectedSize.filter(e => e !== action.payload)
                }
            }
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
export const delete_item_cart = (iid) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ITEM_CART,
            payload: iid
        })
    }
}

export const handle_size_click = (size) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_SIZE_CLICK,
            payload: size
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
export const TOGGLE_MODAL = 'shopping-cart/TOGGLE_MODAL';

const INITIAL_STATE = {
    modalOpen: false
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case TOGGLE_MODAL:
            return {
                ...state,
                modalOpen: !state.modalOpen,
            }
        default:
            return {
                ...state
            }
    }
}

//Action Creators
export const toggle_modal = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
        })
    }
}
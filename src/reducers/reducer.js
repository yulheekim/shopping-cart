export const AAA = 'shopping-cart/AAA';
const INITIAL_STATE = {
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        default:
            return {
                ...state
            }
    }
}

//Action Creators
// export const set_move_index = (move_index) => {
//     return (dispatch) => {
//         dispatch({
//             type: SET_MOVE_INDEX,
//             payload: move_index
//         })
//     }
// }
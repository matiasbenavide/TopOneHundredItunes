import { GET_ALBUMS } from "../actions/top.one.hundred.list.actions";

const initialState = {
    albums: [],
    selectedID: null,
}

function albumReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                selectedID: action.id,
            }
        default:
            return state
    }
}

export default albumReducer;
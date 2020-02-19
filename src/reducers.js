import {
    INCREMENT,
    DECREMENT
} from './actions';

export const initialState = {};
export function count(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                [action.payload.datestamp]: (state[action.payload.datestamp] || 0) + 1
            }
            break;
        case DECREMENT:
            return {
                ...state,
                [action.payload.datestamp]: (state[action.payload.datestamp] || 0) - 1
            }
            break;
        default:
            break;            
    }
    return state;
}
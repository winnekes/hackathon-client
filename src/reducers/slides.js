import { SLIDES_FETCHED } from '../actions';

export default function(state = {}, action = {}) {
    switch (action.type) {
        case SLIDES_FETCHED:
            return action.payload;
        default:
            return state;
    }
}

import { TRIPS_FETCHED } from '../actions';

export default function(state = [], action = {}) {
    switch (action.type) {
        case TRIPS_FETCHED:
            return action.payload;
        default:
            return state;
    }
}

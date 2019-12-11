import { TRIPS_FETCHED, TRIP_EDITED } from '../actions';

export default function(state = [], action = {}) {
    switch (action.type) {
        case TRIPS_FETCHED:
            return action.payload;
        default:
            return state;
    }
}

import { IMAGE_UPLOADED } from '../actions';

export default function(state = null, action = {}) {
    switch (action.type) {
        case IMAGE_UPLOADED:
            return action.payload;

        default:
            return state;
    }
}

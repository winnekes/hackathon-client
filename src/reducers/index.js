import { combineReducers } from 'redux';

import user from './user';
import trips from './trips';
import slides from './slides';

export default combineReducers({
    user,
    trips,
    slides,
});

import { combineReducers } from 'redux';

import user from './user';
import trips from './trips';

export default combineReducers({
    user,
    trips,
});

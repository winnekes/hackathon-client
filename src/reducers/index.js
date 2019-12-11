import { combineReducers } from 'redux';

import user from './user';
import trips from './trips';
import events from './events';

export default combineReducers({
    user,
    trips,
    events,
});

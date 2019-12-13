import { combineReducers } from 'redux';

import user from './user';
import trips from './trips';
import slides from './slides';
import images from './images';

export default combineReducers({
    user,
    trips,
    slides,
    images,
});

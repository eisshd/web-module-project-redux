import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favReducer'

const rootReducer = combineReducers({
    movieReducer,
    favoriteReducer
    
})

export default rootReducer;
import authReducer from './authReducers';
import postReducer from './postReducers';

import {combineReducers} from 'redux';


const rootReducer  = combineReducers({
    auth : authReducer,
    post : postReducer
});
export default rootReducer;
import authReducer from './authReducers';
import postReducer from './postReducers';

import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer  = combineReducers({
    auth : authReducer,
    post : postReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
});
export default rootReducer;
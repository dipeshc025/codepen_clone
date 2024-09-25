import { combineReducers } from 'redux';
import authReducer from './authReducer';
import penReducer from './penReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    pens: penReducer,
});

export default rootReducer;

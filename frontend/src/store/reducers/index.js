import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { regValReducer } from './regValReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
    loginReducer,
    regValReducer,
    userReducer
});

export default reducer
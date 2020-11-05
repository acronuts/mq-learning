import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { regValReducer } from './regValReducer';

const reducer = combineReducers({
    loginReducer,
    regValReducer
});

export default reducer
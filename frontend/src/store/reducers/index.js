import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import { regValReducer } from './regValReducer';
import userReducer from './userReducer';
import workshopReducer from './workshopReducer';

const reducer = combineReducers({
	regValReducer,
	user: userReducer,
	company: companyReducer,
	workshop: workshopReducer,
});

export default reducer;

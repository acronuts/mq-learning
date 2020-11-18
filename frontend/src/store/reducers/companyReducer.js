import { COMPANY_INFO } from '../actionTypes';

const initialState = {
	company: null,
};

const companyReducer = (state = initialState, action) => {
	switch (action.type) {
		case COMPANY_INFO:
			return {
				...state,
				company: action.payload,
			};
		default:
			return state;
	}
};

export default companyReducer;

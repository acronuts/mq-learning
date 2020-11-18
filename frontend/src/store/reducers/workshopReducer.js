import { WORKSHOP_INFO } from '../actionTypes';

const initialState = {
	workshop: null,
};

const workshopReducer = (state = initialState, action) => {
	switch (action.type) {
		case WORKSHOP_INFO:
			return {
				...state,
				workshop: action.payload,
			};
		default:
			return state;
	}
};

export default workshopReducer;

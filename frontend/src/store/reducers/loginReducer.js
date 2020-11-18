import {USER_LOGIN, USER_LOGOUT} from '../actionTypes';

const initialState = {
    user: null,
    token: null,
    authenticated: false
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN: {
            return {
                user: action.payload.user,
                token: action.payload.access,
                authenticated: action.payload.authenticated
            };
        }
        case USER_LOGOUT: {
            return {
                user: null,
                token: null,
                authenticated: false
            };
        }
        default:
            return state;
    }
};
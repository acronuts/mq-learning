import { USER_LOGOUT } from '../actionTypes';

export const logoutAction = () => {
    localStorage.clear();
    return {
        type: USER_LOGOUT,
        payload: ''
    };
};
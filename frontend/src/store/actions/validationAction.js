import baseUrl from '../baseUrl';
import { USER_REGISTRATION } from "../actionTypes";

const validation = data => ({
    type: USER_REGISTRATION,
    payload: data
});

export const validationAction = userData => async (dispatch, getState) => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const body = JSON.stringify(userData);

    const config = {
        headers,
        body,
        method: 'POST'
    };

    dispatch(validation(userData));
    await fetch(`${ baseUrl }/backend/api/registration/validate/`, config);
}
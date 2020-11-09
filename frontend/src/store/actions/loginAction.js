import baseUrl from '../baseUrl';
import { USER_LOGIN } from '../actionTypes';

export const loginAction = user => ({
    type: USER_LOGIN,
    payload: user
});

export const login = (data, history) => async (dispatch, getState) => {
    console.log('data ', data);
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const body = JSON.stringify(data);

    const config = {
        headers,
        body,
        method: 'POST'
    };

    const response = await fetch(`${ baseUrl }/backend/api/auth/token/`, config);
    const user = await response.json();
    const {access} = user;


    if(access) {
        localStorage.setItem('token', access)
        dispatch(loginAction({ user: user, authenticated: true }));
        history.push('/mainpage')
    } else {
        dispatch(loginAction({ user: '', authenticated: false }));
    }

    return user;
}
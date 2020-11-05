import baseUrl from '../baseUrl';

export const registrationAction = email => (dispatch, getState) => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const body = JSON.stringify(email);
    
    const config = {
        headers,
        body,
        method: 'POST'
    };

    fetch(`${baseUrl}/backend/api/auth/registration/`, config);
}
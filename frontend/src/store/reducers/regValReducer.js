import { USER_REGISTRATION } from "../actionTypes";

const initialState = {
    email: '',
    code: '',
    first_name: '',
    last_name: '',
    company: '',
    password: '',
    password_repeat: '',
}

export const regValReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_REGISTRATION:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
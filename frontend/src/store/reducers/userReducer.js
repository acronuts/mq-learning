import { USER_INFO } from "../actionTypes";



export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_INFO:
            return {
                ...state, 
                user: action.payload 
                
            }
        default:
            return state;
    }
}
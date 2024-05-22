import { LOGIN_SUCCEED, LOGIN_ERROR, LOGOUT } from "../actions/authAction.js";

const initialState = {
    status: 'null',
    isLoggedIn: false,
    token: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCEED:
            return {
                ...state,
                status: 'SUCCEED',
                isLoggedIn: true,
                token: action.payload,
                error: null
            };
            case LOGIN_ERROR: {
                return {
                    ...state,
                    status:'ERROR',
                    isLoggedIn: false,
                    error: action.payload,
                };
            }
            case LOGOUT: {
                return initialState;
            }
            default:
                return state;
    }
}
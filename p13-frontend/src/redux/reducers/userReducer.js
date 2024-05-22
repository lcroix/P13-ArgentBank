import { SET_PROFILE, EDIT_USERNAME,LOGOUT } from "../actions/userActions.js";

const initialState = {
    status: 'null',
    userData: {},
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return {
                ...state,
                status: 'SUCCEED',
                userData: action.payload,
            };
            case EDIT_USERNAME:
                return {
                    ...state,
                    status:'MODIFIED',
                    userData: {
                        ...state.userData,
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                    },
                };
                case LOGOUT: {
                    return initialState;
                }
                default:
                    return state;
    }
};
export default userReducer;
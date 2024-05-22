export const SET_PROFILE = 'SET_PROFILE';
export const EDIT_USERNAME = 'EDIT_USERNAME';
export const LOGOUT = 'LOGOUT';


export const setProfile = (userData) => {
    return {
    type: SET_PROFILE,
    payload: userData,
    };
};

export const editUser = (userName) => {
    return {
    type: EDIT_USERNAME,
    payload: userName,
    };
};


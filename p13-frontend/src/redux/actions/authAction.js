export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';


// action pour gérer le succès de la connection utilisateur 

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCEED,
    payload: token,
});

// action pour gérer la fail de la connection utilisateur

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error,
});

// action pour gérer la déconnection utilisateur

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { authReducer } from "./reducers/authReducer";


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;
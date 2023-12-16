import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./authorization/authSlice";


const rootReducer = combineReducers({
        contacts: contactsReducer,
        filter: filterReducer,
        authorization: authReducer
})


export const store = configureStore({
    reducer: rootReducer,
}
);
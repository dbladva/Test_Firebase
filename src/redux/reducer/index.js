import { combineReducers } from "redux";
import { auth_reducer } from "./auth_reducer";

export const RootReducer = combineReducers({
    auth : auth_reducer,
})
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginWindowReducer from "./loginWindowReducer";
import overlayReducer from "./overlayReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    loginWindow:loginWindowReducer,
    overlay:overlayReducer
})

export default rootReducer
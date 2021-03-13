import { combineReducers } from "redux";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";

const rootReducer = combineReducers({
  authReducer,
  airportReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import flightReducer from "./flightReducer";

const rootReducer = combineReducers({
  authReducer,
  airportReducer,
  flightReducer,
});

export default rootReducer;

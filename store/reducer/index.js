import { combineReducers } from "redux";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import flightReducer from "./flightReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  authReducer,
  airportReducer,
  flightReducer,
  bookingReducer,
});

export default rootReducer;

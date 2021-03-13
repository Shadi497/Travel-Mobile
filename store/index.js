import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { checkToken } from "./actions/authActions";
import { fetchAirports } from "./actions/airportAction";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkToken());
store.dispatch(fetchAirports());

export default store;

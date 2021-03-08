import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { checkToken } from "./actions/authActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkToken());

export default store;

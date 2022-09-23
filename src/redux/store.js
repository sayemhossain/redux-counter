import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";

const store = createStore(counterReducer, applyMiddleware(logger, myLogger));

export default store;

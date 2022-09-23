import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import myLogger from "./middlewares/myLogger";

const store = createStore(counterReducer, applyMiddleware(myLogger));

export default store;

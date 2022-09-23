import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";

//create our first middleware
const myLogger = (store) => (next) => (action) => {};

const store = createStore(counterReducer, applyMiddleware(myLogger));

export default store;

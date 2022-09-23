import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

//create our first middleware

const store = createStore(counterReducer);

export default store;

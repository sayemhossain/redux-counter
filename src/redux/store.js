import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;

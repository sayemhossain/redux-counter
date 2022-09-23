import counterReducer from "../counter/counterReducer";

//create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(counterReducer, store.getState());
  console.log(JSON.stringify(upcomingState));

  //pass action
  return next(action);
};
export default myLogger;

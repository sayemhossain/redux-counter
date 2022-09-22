import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

//this action for decrement the value
export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

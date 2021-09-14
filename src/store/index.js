import { createStore } from "redux";
import counterSlice from "./CounterSlice";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
// const counterReduce = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + action.num,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - action.num,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

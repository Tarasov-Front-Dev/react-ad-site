import { createStore, combineReducers } from "redux";
import { productTypeReducer } from "./productTypeReducer";
import { minMaxReducer } from "./minMaxReducer";

const rootReducer = combineReducers({
  type: productTypeReducer,
  minMax: minMaxReducer,
})

export const store = createStore(rootReducer)
import { createStore, combineReducers } from "redux";
import { productTypeReducer } from "./productTypeReducer";
import { minMaxReducer } from "./minMaxReducer";
import { sortReducer } from "./sortReducer";

const rootReducer = combineReducers({
  type: productTypeReducer,
  minMax: minMaxReducer,
  sort: sortReducer,
})

export const store = createStore(rootReducer)
import { createStore, combineReducers } from "redux";
import { productTypeReducer } from "./productTypeReducer";
import { minMaxReducer } from "./minMaxReducer";
import { sortReducer } from "./sortReducer";
import { estateReducer } from "./estateReducer";

const rootReducer = combineReducers({
  type: productTypeReducer,
  minMax: minMaxReducer,
  sort: sortReducer,
  estate: estateReducer,
})

export const store = createStore(rootReducer)
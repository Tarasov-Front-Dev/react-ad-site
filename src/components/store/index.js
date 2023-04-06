import { createStore, combineReducers } from "redux";
import { productTypeReducer } from "./productTypeReducer";
import { minMaxReducer } from "./minMaxReducer";
import { sortReducer } from "./sortReducer";
import { estateReducer } from "./estateReducer";
import { laptopReducer } from "./laptopReducer";
import { cameraReducer } from "./cameraReducer";

const rootReducer = combineReducers({
  type: productTypeReducer,
  minMax: minMaxReducer,
  sort: sortReducer,
  estate: estateReducer,
  laptop: laptopReducer,
  camera: cameraReducer,
})

export const store = createStore(rootReducer)
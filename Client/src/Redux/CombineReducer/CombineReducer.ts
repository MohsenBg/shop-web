//All product Data
import { combineReducers } from "redux";
import ReducerAPD from "../AllProductData/ReducerAPD";

export const RootReducer = combineReducers({
  AllProductData: ReducerAPD,
});

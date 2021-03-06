//All product Data
import { combineReducers } from "redux";
import { ReducerAPD } from "../AllProductData/ReducerAPD";
import { SearchValueReducer } from "../search/ReducerSearch";
import { ReducerUD } from "../userData/ReducerUD";

export const RootReducer = combineReducers({
  AllProductData: ReducerAPD,
  userData: ReducerUD,
  searchValue: SearchValueReducer,
});

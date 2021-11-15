import { Actions, getDataProduct } from "./ActionsAPD";
import { ActionType } from "./ActionTypeAPD";

const initialState = {
  loading: false,
  productData: [],
};

export const ReducerAPD = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.FETCH_DATA:
      return { ...state };
    case ActionType.ON_LOADING:
      return { ...state, loading: true };
    case ActionType.STORE_DATA:
      return { ...state, productData: action.PayLoad };
    case ActionType.END_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

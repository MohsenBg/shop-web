import { ActionTypeSearch } from "./ActionTypeSearch";
import { ActionsSearch } from "./SearchAction";

const initialState = {
  searchValue: "",
};

export const SearchValueReducer = (
  state = initialState,
  actions: ActionsSearch
) => {
  switch (actions.type) {
    case ActionTypeSearch.STORE_VALUE:
      return { ...state, searchValue: actions.payload };
    default:
      return state;
  }
};

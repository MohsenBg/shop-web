import { ActionTypeSearch } from "./ActionTypeSearch";

interface StoreSearchValue {
  type: ActionTypeSearch.STORE_VALUE;
  payload: any;
}

export type ActionsSearch = StoreSearchValue;

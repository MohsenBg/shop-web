import { ActionType as ActionTypes } from "./../userData/ActionTypeUD";
import axios from "axios";
import { Dispatch } from "redux";
import { Url } from "../../Url";
import { ActionType } from "./ActionTypeAPD";

interface fetchData {
  type: ActionType.FETCH_DATA;
  PayLoad: any;
}

export const fetch_Data = () => {
  return {
    type: ActionType.FETCH_DATA,
  };
};

interface onLoading {
  type: ActionType.ON_LOADING;
}

export const on_Loading = () => {
  return {
    type: ActionType.ON_LOADING,
  };
};

interface StoreData {
  type: ActionType.STORE_DATA;
  PayLoad: any;
}

export const Store_Data = (DataFromAxios: any) => {
  return {
    type: ActionType.STORE_DATA,
    Payload: DataFromAxios,
  };
};

interface endLoading {
  type: ActionType.END_LOADING;
}

export const end_Loading = () => {
  return {
    type: ActionType.END_LOADING,
  };
};

export const getDataProduct = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.ON_LOADING });
    await axios
      .get(`${Url}api/getDataProduct`)
      .then((response) => {
        dispatch({
          type: ActionType.STORE_DATA,
          PayLoad: response.data.reverse(),
        });
      })
      .catch((err) => console.log(err));
    await axios.get(`${Url}api/checkLogin`).then((response) => {
      console.log(response.data);
      if (response.data.LoggedIn) {
        dispatch({ type: ActionTypes.LOGIN_IN });
        dispatch({
          type: ActionTypes.USER_DATA,
          PayLoad1: response.data.user[0].UserName,
          PayLoad2: "",
        });
      } else {
        return null;
      }
    });
    dispatch({ type: ActionType.END_LOADING });
  };
};

export type Actions = fetchData | onLoading | StoreData | endLoading;

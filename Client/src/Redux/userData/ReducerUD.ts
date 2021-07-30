import { Actions } from "./ActionsUD";
import { ActionType } from "./ActionTypeUD";

const initialState = {
  loginStatus: false,
  userName: "",
  email: "",
};

export const ReducerUD = (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case ActionType.LOGIN_IN:
      return { ...state, loginStatus: true };
    case ActionType.LOGIN_OUT:
      return { ...state, loginStatus: false };
    case ActionType.USER_DATA:
      return { ...state, userName: actions.PayLoad1, email: actions.PayLoad2 };

    default:
      return state;
  }
};

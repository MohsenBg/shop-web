import { Actions } from "./ActionsUD";
import { ActionType } from "./ActionTypeUD";

const initialState = {
  loginStatus: false,
  userName: "",
  email: "",
};

export default (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case ActionType.LOGIN_STATUS:
      return { ...state, loginStatus: true };

    case ActionType.USER_DATA:
      return { ...state, userName: actions.PayLoad1, email: actions.PayLoad2 };

    default:
      return state;
  }
};

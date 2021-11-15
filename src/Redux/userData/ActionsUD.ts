import { ActionType } from "./ActionTypeUD";

interface loginIn {
  type: ActionType.LOGIN_IN;
}
export const login_In = () => {
  return {
    type: ActionType.LOGIN_IN,
  };
};

interface loginOut {
  type: ActionType.LOGIN_OUT;
}
export const login_Out = () => {
  return {
    type: ActionType.LOGIN_OUT,
  };
};

interface userData {
  type: ActionType.USER_DATA;
  PayLoad1: any;
  PayLoad2: any;
}

export const user_Data = (userName: any, Email: any) => {
  return {
    type: ActionType.USER_DATA,
    PayLoad1: userName,
    PayLoad2: Email,
  };
};

export type Actions = userData | loginIn | loginOut;

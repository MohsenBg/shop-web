import { ActionType } from "./ActionTypeUD";

interface loginStatus {
  type: ActionType.LOGIN_STATUS;
}
export const login_Status = () => {
  return {
    type: ActionType.LOGIN_STATUS,
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

export type Actions = userData | loginStatus;

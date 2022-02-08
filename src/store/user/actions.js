import {USER_LOGIN} from "Store/constants";

export const login = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};

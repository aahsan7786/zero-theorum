import {CLOSE_COOKIES} from "../constants";

export const closeCookies = (el) => {
  return {
      type: CLOSE_COOKIES,
      payload: el
  }
};

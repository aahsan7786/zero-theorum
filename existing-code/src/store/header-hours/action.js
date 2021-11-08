import { HOURS_NUMBER } from "../constants";

export const hoursNumber = (active) => {
  return {
    type: HOURS_NUMBER,
    payload: active,
  };
};

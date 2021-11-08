import {CHANGE_ZT_LEARNER} from "../constants";

export const changeZTLearner = (type) => {
  return {
      type: CHANGE_ZT_LEARNER,
      payload: type
  }
};

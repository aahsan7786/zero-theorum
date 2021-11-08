import {ENABLE_DOWNLOADS, NEXT_DATA_STEP, PREV_DATA_STEP} from "../constants";

export const nextDataStep = () => {
  return {
      type: NEXT_DATA_STEP
  }
};

export const prevDataStep = () => {
  return {
      type: PREV_DATA_STEP
  }
};

export const toggleDownloads = (status) => {
  return {
      type: ENABLE_DOWNLOADS,
      payload: status
  }
};
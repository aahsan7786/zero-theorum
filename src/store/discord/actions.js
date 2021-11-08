import {GET_DISCORD, GET_DISCORD_ERROR} from "../constants";

export const get_discord = (data) => {
  return {
      type: GET_DISCORD,
      data: data
  }
};

export const get_discord_error = (error) => {
  return {
      type: GET_DISCORD_ERROR,
      payload: error
  }
};
